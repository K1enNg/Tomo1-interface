import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, Button, Paper, Alert } from '@mui/material';
import TestLayout from '../../../../components/layout/TestLayout/TestLayout';
import BirdMascot from '../../../../components/mascot/BirdMascot/BirdMascot';

const ChildInfo = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = () => {
        if (!name.trim()) {
            setError('Vui lòng nhập tên của bé');
            return;
        }
        if (!dateOfBirth) {
            setError('Vui lòng nhập ngày sinh của bé');
            return;
        }

        const dobDate = new Date(dateOfBirth);
        if (dobDate > new Date()) {
            setError('Ngày sinh không hợp lệ');
            return;
        }

        const childInfo = {
            name: name.trim(),
            dateOfBirth: dobDate,
        };

        sessionStorage.setItem('denverChildInfo', JSON.stringify(childInfo));
        navigate('/denver/test');
    };

    return (
        <TestLayout>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 3,
                    mt: 2,
                }}
            >
                <Typography variant="h4" component="h1" sx={{ fontWeight: 700, textAlign: 'center' }}>
                    Thông tin của bé
                </Typography>

                <BirdMascot animation="float" size={150} />

                <Paper
                    elevation={3}
                    sx={{
                        p: 4,
                        width: '100%',
                        maxWidth: 500,
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    }}
                >
                    {error && (
                        <Alert severity="error" sx={{ mb: 3 }}>
                            {error}
                        </Alert>
                    )}

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <TextField
                            label="Tên thường gọi của bé"
                            variant="outlined"
                            fullWidth
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                setError('');
                            }}
                            placeholder="Ví dụ: Bé Bông, Bé Tin..."
                        />

                        <TextField
                            label="Ngày tháng năm sinh"
                            type="date"
                            value={dateOfBirth}
                            onChange={(e) => {
                                setDateOfBirth(e.target.value);
                                setError('');
                            }}
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            helperText="Để tính chính xác tuổi của bé"
                        />

                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            onClick={handleSubmit}
                            sx={{
                                mt: 2,
                                py: 1.5,
                                fontSize: '1.1rem',
                                fontWeight: 600,
                            }}
                        >
                            Tiếp tục
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </TestLayout>
    );
};

export default ChildInfo;
