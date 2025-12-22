import { Box, Typography, Button, IconButton, Card, CardContent, Link } from '@mui/material';
import { Settings as SettingsIcon, Info as InfoIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import TestLayout from '../../../../components/layout/TestLayout/TestLayout';
import BirdMascot from '../../../../components/mascot/BirdMascot/BirdMascot';

const DenverIntro = () => {
    const navigate = useNavigate();

    const handleStartTest = () => {
        navigate('/denver/child-info');
    };

    return (
        <TestLayout>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h3" component="h1" sx={{ fontWeight: 700 }}>
                    Đánh giá phát triển ngôn ngữ
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

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 4,
                    mt: 4,
                }}
            >
                <BirdMascot animation="bounce" size={250} />

                <Typography
                    variant="h5"
                    component="p"
                    sx={{
                        textAlign: 'center',
                        maxWidth: 600,
                        px: 2,
                    }}
                >
                    Kiểm tra phát triển ngôn ngữ của bé theo tiêu chuẩn Denver
                </Typography>

                <Card
                    sx={{
                        maxWidth: 600,
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    }}
                >
                    <CardContent>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <InfoIcon sx={{ color: 'primary.main', flexShrink: 0 }} />
                            <Box>
                                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                                    Hướng dẫn quan trọng
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                    • Ba mẹ không ra tín hiệu bằng mắt, bằng tay hay hành động
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                    • Trả lời trung thực về năng lực của bé
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    • Có thể xem{' '}
                                    <Link
                                        href="https://example.com/denver-instructions"
                                        target="_blank"
                                        sx={{ fontWeight: 600 }}
                                    >
                                        hướng dẫn chi tiết
                                    </Link>
                                </Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>

                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={handleStartTest}
                    sx={{
                        mt: 2,
                        px: 6,
                        py: 2,
                        fontSize: '1.25rem',
                    }}
                >
                    Bắt đầu đánh giá
                </Button>
            </Box>
        </TestLayout>
    );
};

export default DenverIntro;