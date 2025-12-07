import { useState } from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardMedia,
    CardActionArea,
    Button,
} from '@mui/material';
import { Check as CheckIcon } from '@mui/icons-material';
import type { ImageSelectionQuestion as ImageSelectionQuestionType } from '../../../types/test.types';

interface ImageSelectionProps {
    question: ImageSelectionQuestionType;
    onAnswer: (answer: string[]) => void;
    onSkip?: () => void;
}

const ImageSelection = ({ question, onAnswer, onSkip }: ImageSelectionProps) => {
    const [selectedImages, setSelectedImages] = useState<string[]>([]);

    const toggleImage = (imageId: string) => {
        setSelectedImages((prev) =>
            prev.includes(imageId)
                ? prev.filter((id) => id !== imageId)
                : [...prev, imageId]
        );
    };

    const handleSubmit = () => {
        if (selectedImages.length > 0) {
            onAnswer(selectedImages);
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
            <Typography variant="h5" component="h2" sx={{ textAlign: 'center', fontWeight: 600 }}>
                {question.question}
            </Typography>

            <Grid container spacing={2}>
                {question.images.map((image) => (
                    <Grid item xs={6} sm={4} key={image.id}>
                        <Card
                            sx={{
                                position: 'relative',
                                border: selectedImages.includes(image.id) ? '4px solid' : '2px solid transparent',
                                borderColor: selectedImages.includes(image.id) ? 'primary.main' : 'transparent',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                },
                            }}
                        >
                            <CardActionArea onClick={() => toggleImage(image.id)}>
                                <CardMedia
                                    component="img"
                                    height="160"
                                    image={image.url}
                                    alt={image.alt}
                                    sx={{ objectFit: 'cover' }}
                                />
                                {selectedImages.includes(image.id) && (
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 8,
                                            right: 8,
                                            backgroundColor: 'primary.main',
                                            borderRadius: '50%',
                                            width: 36,
                                            height: 36,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <CheckIcon sx={{ color: 'white' }} />
                                    </Box>
                                )}
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={handleSubmit}
                    disabled={selectedImages.length === 0}
                    sx={{ flex: 1 }}
                >
                    Tiếp tục
                </Button>
                {onSkip && (
                    <Button
                        variant="outlined"
                        size="large"
                        onClick={onSkip}
                        sx={{ flex: 1 }}
                    >
                        Bé không hợp tác
                    </Button>
                )}
            </Box>
        </Box>
    );
};

export default ImageSelection;
