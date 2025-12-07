import { Box, Typography, Button, Paper } from '@mui/material';
import { CheckCircle as CheckCircleIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import TestLayout from '../../../components/layout/TestLayout/TestLayout';
import BirdMascot from '../../../components/mascot/BirdMascot/BirdMascot';

const TestComplete = () => {
    const navigate = useNavigate();

    const handleReturnHome = () => {
        localStorage.removeItem('testAnswers');
        navigate('/signin');
    };

    return (
        <TestLayout>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 4,
                    mt: 4,
                }}
            >
                <BirdMascot animation="celebrate" size={250} />

                <CheckCircleIcon
                    sx={{
                        fontSize: 80,
                        color: 'success.main',
                    }}
                />

                <Typography
                    variant="h3"
                    component="h1"
                    sx={{
                        textAlign: 'center',
                        fontWeight: 700,
                        color: 'success.main',
                    }}
                >
                    Hoàn thành!
                </Typography>

                <Paper
                    sx={{
                        p: 4,
                        maxWidth: 600,
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h5" gutterBottom>
                        Cảm ơn bé đã hoàn thành bài kiểm tra!
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                        Kết quả của bé đã được ghi nhận. Chúng tôi sẽ phân tích và đề xuất
                        lớp học phù hợp nhất cho bé.
                    </Typography>
                </Paper>

                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={handleReturnHome}
                    sx={{
                        mt: 2,
                        px: 6,
                        py: 2,
                        fontSize: '1.25rem',
                    }}
                >
                    Về trang chủ
                </Button>
            </Box>
        </TestLayout>
    );
};

export default TestComplete;
