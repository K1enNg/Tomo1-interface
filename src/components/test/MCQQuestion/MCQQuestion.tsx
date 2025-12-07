import { useState } from 'react';
import {
    Box,
    Typography,
    Radio,
    RadioGroup,
    FormControlLabel,
    Card,
    CardContent,
    Button,
} from '@mui/material';
import BirdMascot from '../../mascot/BirdMascot/BirdMascot';
import type { MCQQuestion as MCQQuestionType } from '../../../types/test.types';

interface MCQQuestionProps {
    question: MCQQuestionType;
    onAnswer: (answer: number) => void;
}

const MCQQuestion = ({ question, onAnswer }: MCQQuestionProps) => {
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

    const handleSubmit = () => {
        if (selectedAnswer !== null) {
            onAnswer(selectedAnswer);
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <BirdMascot animation="float" size={180} />
            </Box>

            <Typography variant="h5" component="h2" sx={{ textAlign: 'center', fontWeight: 600 }}>
                {question.question}
            </Typography>

            <RadioGroup
                value={selectedAnswer}
                onChange={(e) => setSelectedAnswer(Number(e.target.value))}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {question.options.map((option, index) => (
                        <Card
                            key={index}
                            sx={{
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                border: selectedAnswer === index ? '3px solid' : '2px solid transparent',
                                borderColor: selectedAnswer === index ? 'primary.main' : 'transparent',
                                '&:hover': {
                                    transform: 'translateX(8px)',
                                    boxShadow: 4,
                                },
                            }}
                            onClick={() => setSelectedAnswer(index)}
                        >
                            <CardContent>
                                <FormControlLabel
                                    value={index}
                                    control={<Radio />}
                                    label={
                                        <Typography variant="body1" sx={{ fontSize: '1.125rem' }}>
                                            {option}
                                        </Typography>
                                    }
                                    sx={{ width: '100%', margin: 0 }}
                                />
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </RadioGroup>

            <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={handleSubmit}
                disabled={selectedAnswer === null}
                sx={{ mt: 2 }}
            >
                Tiếp tục
            </Button>
        </Box>
    );
};

export default MCQQuestion;
