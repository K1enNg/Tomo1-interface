import { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Paper,
} from '@mui/material';
import BirdMascot from '../../mascot/BirdMascot/BirdMascot';
import type { SAQQuestion as SAQQuestionType } from '../../../types/test.types';

interface SAQQuestionProps {
    question: SAQQuestionType;
    onAnswer: (answer: string) => void;
}

const SAQQuestion = ({ question, onAnswer }: SAQQuestionProps) => {
    const [answer, setAnswer] = useState('');

    const handleSubmit = () => {
        if (answer.trim()) {
            onAnswer(answer);
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

            {question.examples && question.examples.length > 0 && (
                <Paper
                    sx={{
                        p: 3,
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    }}
                >
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1.5 }}>
                        Ví dụ:
                    </Typography>
                    {question.examples.map((example, index) => (
                        <Typography key={index} variant="body1" sx={{ mb: 0.5 }}>
                            - {example}
                        </Typography>
                    ))}
                </Paper>
            )}

            <TextField
                fullWidth
                multiline
                rows={4}
                label="Câu trả lời của bé"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Nhập câu trả lời tại đây..."
                helperText={question.helperText || '*Ba mẹ không ra tín hiệu bằng mắt, bằng tay hay hành động.'}
            />

            <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={handleSubmit}
                disabled={!answer.trim()}
                sx={{ mt: 2 }}
            >
                Tiếp tục
            </Button>
        </Box>
    );
};

export default SAQQuestion;
