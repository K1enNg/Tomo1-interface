import { Box, Typography, Button, IconButton } from '@mui/material';
import { Settings as SettingsIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import TestLayout from '../../../components/layout/TestLayout/TestLayout';
import BirdMascot from '../../../components/mascot/BirdMascot/BirdMascot';

const TestIntro = () => {
    const navigate = useNavigate();

    const handleStartTest = () => {
        navigate('/test/question/0');
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
                    Ba mẹ cùng con làm bài đánh giá nhỏ để chọn lớp học phù hợp nhé!
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        textAlign: 'center',
                        color: 'text.secondary',
                        maxWidth: 500,
                        px: 2,
                    }}
                >
                    *Ba mẹ không ra tín hiệu bằng mắt, bằng tay hay hành động.
                </Typography>

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
                    Tiếp tục
                </Button>
            </Box>
        </TestLayout>
    );
};

export default TestIntro;
