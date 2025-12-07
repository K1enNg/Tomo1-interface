import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, IconButton } from '@mui/material';
import { Settings as SettingsIcon } from '@mui/icons-material';
import TestLayout from '../../../components/layout/TestLayout/TestLayout';
import ProgressBar from '../../../components/test/ProgressBar/ProgressBar';
import MCQQuestion from '../../../components/test/MCQQuestion/MCQQuestion';
import SAQQuestion from '../../../components/test/SAQQuestion/SAQQuestion';
import ImageSelection from '../../../components/test/ImageSelection/ImageSelection';
import type { Question, TestAnswer } from '../../../types/test.types';
import { mockQuestions } from '../../../services/testService';

const TestQuestion = () => {
    const { questionId } = useParams<{ questionId: string }>();
    const navigate = useNavigate();
    const [questions] = useState<Question[]>(mockQuestions);
    const [answers, setAnswers] = useState<TestAnswer[]>([]);
    const [startTime] = useState(Date.now());

    const currentIndex = parseInt(questionId || '0', 10);
    const currentQuestion = questions[currentIndex];

    useEffect(() => {
        if (!currentQuestion) {
            navigate('/test/complete');
        }
    }, [currentQuestion, navigate]);

    const handleAnswer = (answer: string | number | string[]) => {
        const newAnswer: TestAnswer = {
            questionId: currentQuestion.id,
            answer,
            timeSpent: Date.now() - startTime,
        };

        const updatedAnswers = [...answers, newAnswer];
        setAnswers(updatedAnswers);

        // Save to localStorage
        localStorage.setItem('testAnswers', JSON.stringify(updatedAnswers));

        // Navigate to next question or complete
        if (currentIndex < questions.length - 1) {
            navigate(`/test/question/${currentIndex + 1}`);
        } else {
            navigate('/test/complete');
        }
    };

    const handleSkip = () => {
        if (currentIndex < questions.length - 1) {
            navigate(`/test/question/${currentIndex + 1}`);
        } else {
            navigate('/test/complete');
        }
    };

    if (!currentQuestion) {
        return null;
    }

    return (
        <TestLayout>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
                    Khởi động ban đầu
                </Typography>
                <IconButton
                    sx={{
                        backgroundColor: 'white',
                        '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
                    }}
                >
                    <SettingsIcon />
                </IconButton>
            </Box>

            <ProgressBar value={currentIndex + 1} total={questions.length} />

            <Box sx={{ mt: 2 }}>
                {currentQuestion.type === 'mcq' && (
                    <MCQQuestion
                        question={currentQuestion}
                        onAnswer={handleAnswer}
                    />
                )}
                {currentQuestion.type === 'saq' && (
                    <SAQQuestion
                        question={currentQuestion}
                        onAnswer={handleAnswer}
                    />
                )}
                {currentQuestion.type === 'image-selection' && (
                    <ImageSelection
                        question={currentQuestion}
                        onAnswer={handleAnswer}
                        onSkip={handleSkip}
                    />
                )}
            </Box>
        </TestLayout>
    );
};

export default TestQuestion;
