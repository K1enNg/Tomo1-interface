import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Card, CardContent, Button, IconButton, LinearProgress, Alert, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { Settings as SettingsIcon } from '@mui/icons-material';
import TestLayout from '../../../../components/layout/TestLayout/TestLayout';
import ProgressBar from '../../../../components/test/ProgressBar/ProgressBar';
import BirdMascot from '../../../../components/mascot/BirdMascot/BirdMascot';
import type { ChildInfo, DenverLanguageQuestion, ExactAge, DenverQuestionResult } from '../../../../types/denver.types';
import { calculateExactAge } from '../../../../services/ageCalculationService';
import { startDenverEntryTest, submitDenverEntryTest } from '../../../../services/denverTestService';

import catImage from '../../../../assets/images/cat.png';
import dogImage from '../../../../assets/images/dog.png';
import birdImage from '../../../../assets/images/bird.png';
import horseImage from '../../../../assets/images/horse.png';
import girlImage from '../../../../assets/images/girl.png';

const getImageSrc = (imagePath: string | undefined): string | undefined => {
    if (!imagePath) return undefined;

    const imageMap: Record<string, string> = {
        '/images/cat.png': catImage,
        '/images/dog.png': dogImage,
        '/images/bird.png': birdImage,
        '/images/horse.png': horseImage,
        '/images/girl.png': girlImage,
    };

    return imageMap[imagePath] || imagePath;
};

const DenverTest = () => {
    const navigate = useNavigate();
    const [childInfo, setChildInfo] = useState<ChildInfo | null>(null);
    const [chronologicalAge, setChronologicalAge] = useState<ExactAge | null>(null);
    const [applicableQuestions, setApplicableQuestions] = useState<DenverLanguageQuestion[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Map<string, 'D' | 'K'>>(new Map());
    const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);
    const [answeredQuestions, setAnsweredQuestions] = useState<Array<{ question: DenverLanguageQuestion; result: 'D' | 'K'; rawAnswer?: any }>>([]);
    const [isTestComplete, setIsTestComplete] = useState(false);
    const [error, setError] = useState('');

    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    useEffect(() => {
        const initializeTest = async () => {
            const savedChildInfo = sessionStorage.getItem('denverChildInfo');
            if (!savedChildInfo) {
                navigate('/denver/intro');
                return;
            }

            const info = JSON.parse(savedChildInfo) as ChildInfo;
            info.dateOfBirth = new Date(info.dateOfBirth);
            setChildInfo(info);

            const age = calculateExactAge(info.dateOfBirth);
            setChronologicalAge(age);

            try {
                const response = await startDenverEntryTest(info.dateOfBirth.toISOString());
                setApplicableQuestions(response.questions);
            } catch (err) {
                setError('Không thể khởi tạo bài kiểm tra. Vui lòng thử lại.');
                console.error(err);
            }
        };

        initializeTest();
    }, [navigate]);

    useEffect(() => {
        setSelectedOptions([]);
    }, [currentQuestionIndex]);

    const handleAnswer = (result: 'D' | 'K', rawAnswer?: any) => {
        if (currentQuestionIndex >= applicableQuestions.length) {
            return;
        }

        const question = applicableQuestions[currentQuestionIndex];

        const newAnswers = new Map(answers);
        newAnswers.set(question.questionId, result);
        setAnswers(newAnswers);
        const newAnsweredQuestions = [...answeredQuestions, { question, result, rawAnswer }];
        setAnsweredQuestions(newAnsweredQuestions);

        let newConsecutiveCorrect = consecutiveCorrect;
        if (result === 'D') {
            newConsecutiveCorrect = consecutiveCorrect + 1;
            setConsecutiveCorrect(newConsecutiveCorrect);
        } else {
            newConsecutiveCorrect = 0;
            setConsecutiveCorrect(0);
        }

        if (newConsecutiveCorrect === 3) {
            completeTest(newAnswers);
            return;
        }

        if (currentQuestionIndex < applicableQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            completeTest(newAnswers);
        }
    };

    const handleMCQSubmit = () => {
        const question = applicableQuestions[currentQuestionIndex];
        const minCorrect = question.minCorrect || 1;
        const result = selectedOptions.length >= minCorrect ? 'D' : 'K';
        handleAnswer(result, selectedOptions);
    }

    const handleOptionToggle = (optionText: string) => {
        if (selectedOptions.includes(optionText)) {
            setSelectedOptions(selectedOptions.filter(o => o !== optionText));
        } else {
            setSelectedOptions([...selectedOptions, optionText]);
        }
    };

    const completeTest = async (finalAnswers: Map<string, 'D' | 'K'>) => {
        if (!childInfo) return;

        const results: DenverQuestionResult[] = applicableQuestions
            .filter(q => finalAnswers.has(q.questionId))
            .map(q => ({
                questionId: q.questionId,
                question: q.text,
                result: finalAnswers.get(q.questionId)!,
                isReused: false,
                rawAnswer: q.type === 'multiple' ? undefined : (finalAnswers.get(q.questionId) === 'D')
            }));

        try {
            const result = await submitDenverEntryTest(childInfo.dateOfBirth.toISOString(), results);
            // Save result
            sessionStorage.setItem('denverTestResult', JSON.stringify(result));
            setIsTestComplete(true);
            setTimeout(() => {
                navigate('/denver/results');
            }, 500);
        } catch (err) {
            setError('Không thể nộp bài kiểm tra. Vui lòng thử lại.');
        }
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
                                {currentQuestion.options.map((option, idx) => {
                                    const isObject = typeof option !== 'string';
                                    const text = isObject ? option.text : option;
                                    const image = isObject ? option.image : undefined;
                                    const imageSrc = getImageSrc(image);

                                    return (
                                        <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 2 }}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={selectedOptions.includes(text)}
                                                        onChange={() => handleOptionToggle(text)}
                                                    />
                                                }
                                                label={text}
                                                sx={{ flexGrow: 1 }}
                                            />
                                            {imageSrc && (
                                                <Box
                                                    component="img"
                                                    src={imageSrc}
                                                    alt={text}
                                                    sx={{
                                                        width: 80,
                                                        height: 80,
                                                        objectFit: 'contain',
                                                        borderRadius: 2,
                                                        border: '2px solid',
                                                        borderColor: 'divider',
                                                        bgcolor: 'grey.50',
                                                        p: 1
                                                    }}
                                                />
                                            )}
                                        </Box>
                                    );
                                })}
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
                                onClick={() => handleAnswer('D')}
                                sx={{ justifyContent: 'flex-start', textAlign: 'left', py: 2 }}
                            >
                                ✓ Có (Pass)
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                onClick={() => handleAnswer('K')}
                                sx={{ justifyContent: 'flex-start', textAlign: 'left', py: 2 }}
                            >
                                ✗ Không (Fail)
                            </Button>
                        </Box>
                    )}
                </CardContent>
            </Card>

            <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Box
                    sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 1,
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                        backgroundColor: consecutiveCorrect > 0 ? 'rgba(255, 152, 0, 0.1)' : 'transparent',
                        border: consecutiveCorrect > 0 ? '2px solid' : 'none',
                        borderColor: consecutiveCorrect > 0 ? 'warning.main' : 'transparent',
                    }}
                >
                    <Typography variant="body2" sx={{ fontWeight: 600, color: consecutiveCorrect > 0 ? 'warning.dark' : 'text.secondary' }}>
                        Liên tiếp đúng: {consecutiveCorrect} / 3
                    </Typography>
                    {consecutiveCorrect > 0 && <span style={{ fontSize: '1.2rem' }}>🔥</span>}
                </Box>
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