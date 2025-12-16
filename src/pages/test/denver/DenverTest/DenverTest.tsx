import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Card, CardContent, Button, IconButton, LinearProgress, Alert, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { Settings as SettingsIcon } from '@mui/icons-material';
import TestLayout from '../../../../components/layout/TestLayout/TestLayout';
import ProgressBar from '../../../../components/test/ProgressBar/ProgressBar';
import BirdMascot from '../../../../components/mascot/BirdMascot/BirdMascot';
import type { ChildInfo, DenverLanguageQuestion, ExactAge } from '../../../../types/denver.types';
import { calculateExactAge } from '../../../../services/ageCalculationService';
import {
    getQuestionsForAge,
} from '../../../../dummyData/denverQuestions';
import { executeDenverTest } from '../../../../services/denverTestService';

const DenverTest = () => {
    const navigate = useNavigate();
    const [childInfo, setChildInfo] = useState<ChildInfo | null>(null);
    const [chronologicalAge, setChronologicalAge] = useState<ExactAge | null>(null);
    const [applicableQuestions, setApplicableQuestions] = useState<DenverLanguageQuestion[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Map<string, 'D' | 'K'>>(new Map());
    const [consecutiveFailures, setConsecutiveFailures] = useState(0);
    const [isTestComplete, setIsTestComplete] = useState(false);
    const [error, setError] = useState('');

    // State for MCQ selections
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    // Initialize test on mount
    useEffect(() => {
        const savedChildInfo = sessionStorage.getItem('denverChildInfo');
        if (!savedChildInfo) {
            navigate('/denver/intro');
            return;
        }

        const info = JSON.parse(savedChildInfo) as ChildInfo;
        info.dateOfBirth = new Date(info.dateOfBirth);
        setChildInfo(info);

        // Calculate age
        const age = calculateExactAge(info.dateOfBirth);
        setChronologicalAge(age);

        // Get applicable questions (from highest age down)
        const questions = getQuestionsForAge(age.totalMonths).sort(
            (a, b) => b.ageMonthMax - a.ageMonthMax
        );
        setApplicableQuestions(questions);
    }, [navigate]);

    // Reset selection when changing questions
    useEffect(() => {
        setSelectedOptions([]);
    }, [currentQuestionIndex]);

    const handleAnswer = (result: 'D' | 'K') => {
        if (currentQuestionIndex >= applicableQuestions.length) {
            return;
        }

        const question = applicableQuestions[currentQuestionIndex];

        // Update answers
        const newAnswers = new Map(answers);
        newAnswers.set(question.questionId, result);
        setAnswers(newAnswers);

        // Track consecutive failures
        if (result === 'D') {
            setConsecutiveFailures(consecutiveFailures + 1);
        } else {
            setConsecutiveFailures(0);
        }

        // Check if we've reached the stopping point (3 consecutive D)
        if (consecutiveFailures + 1 === 3 && result === 'D') {
            completeTest(newAnswers);
            return;
        }

        // Move to next question
        if (currentQuestionIndex < applicableQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // All questions asked
            completeTest(newAnswers);
        }
    };

    const handleMCQSubmit = () => {
        const question = applicableQuestions[currentQuestionIndex];
        const minCorrect = question.minCorrect || 1;
        const result = selectedOptions.length >= minCorrect ? 'K' : 'D';
        handleAnswer(result);
    }

    const handleOptionToggle = (option: string) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter(o => o !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    const completeTest = (finalAnswers: Map<string, 'D' | 'K'>) => {
        if (!childInfo) return;

        const result = executeDenverTest(childInfo, finalAnswers);

        // Save result
        sessionStorage.setItem('denverTestResult', JSON.stringify(result));

        setIsTestComplete(true);

        // Navigate to results after short delay
        setTimeout(() => {
            navigate('/denver/results');
        }, 500);
    };

    if (!childInfo || !chronologicalAge || applicableQuestions.length === 0) {
        return (
            <TestLayout>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 400 }}>
                    <LinearProgress sx={{ width: '100%' }} />
                </Box>
            </TestLayout>
        );
    }

    const currentQuestion = applicableQuestions[currentQuestionIndex];
    // const progressPercentage = ((currentQuestionIndex + 1) / applicableQuestions.length) * 100;

    return (
        <TestLayout>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Box>
                    <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
                        Đánh giá ngôn ngữ
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        {childInfo.name} • Tuổi: {chronologicalAge.years} năm {chronologicalAge.months} tháng
                    </Typography>
                </Box>
                <IconButton
                    sx={{
                        backgroundColor: 'white',
                        '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
                    }}
                >
                    <SettingsIcon />
                </IconButton>
            </Box>

            <ProgressBar value={currentQuestionIndex + 1} total={applicableQuestions.length} />

            <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                <BirdMascot animation="float" size={150} />
            </Box>

            {error && (
                <Alert severity="error" onClose={() => setError('')}>
                    {error}
                </Alert>
            )}

            <Card sx={{ my: 3 }}>
                <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                        {currentQuestion.text}
                    </Typography>

                    {/* Image or Audio placeholder if present */}
                    {/* {currentQuestion.audio && (
                         <Box sx={{ mb: 2 }}>Audio Player Here</Box>
                    )} */}

                    {currentQuestion.type === 'multiple' && currentQuestion.options ? (
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Typography variant="body2" color="text.secondary">
                                (Chọn ít nhất {currentQuestion.minCorrect || 1} đáp án đúng)
                            </Typography>
                            <FormGroup>
                                {currentQuestion.options.map((option, idx) => (
                                    <FormControlLabel
                                        key={idx}
                                        control={
                                            <Checkbox
                                                checked={selectedOptions.includes(option)}
                                                onChange={() => handleOptionToggle(option)}
                                            />
                                        }
                                        label={option}
                                    />
                                ))}
                            </FormGroup>
                            <Button
                                variant="contained"
                                onClick={handleMCQSubmit}
                                sx={{ mt: 2, alignSelf: 'flex-start' }}
                            >
                                Xác nhận
                            </Button>
                        </Box>
                    ) : (
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Button
                                variant="outlined"
                                size="large"
                                onClick={() => handleAnswer('K')}
                                sx={{ justifyContent: 'flex-start', textAlign: 'left', py: 2 }}
                            >
                                ✓ Có (Pass)
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                onClick={() => handleAnswer('D')}
                                sx={{ justifyContent: 'flex-start', textAlign: 'left', py: 2 }}
                            >
                                ✗ Không (Fail)
                            </Button>
                        </Box>
                    )}
                </CardContent>
            </Card>

            <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Typography variant="caption" color="text.secondary">
                    Lỗi liên tục: {consecutiveFailures} / 3
                </Typography>
            </Box>

            {isTestComplete && (
                <Box sx={{ textAlign: 'center', mt: 3 }}>
                    <Typography variant="body1" color="success.main">
                        Đánh giá đang hoàn thành...
                    </Typography>
                </Box>
            )}
        </TestLayout>
    );
};

export default DenverTest;