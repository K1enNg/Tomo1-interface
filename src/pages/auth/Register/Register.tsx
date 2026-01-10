import { useState } from 'react';
import {
    Box,
    TextField,
    Button,
    Link,
    Typography,
    Alert,
    Grid,
} from '@mui/material';
import { register } from '../../../api/auth.ts';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import AuthLayout from '../../../components/layout/AuthLayout/AuthLayout';
import Logo from '../../../components/common/Logo/Logo';

const Register = () => {
    const navigate = useNavigate();

    const [childName, setChildName] = useState('');
    const [childDob, setChildDob] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [formData, setFormData] = useState({
        password: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
    });
    const [error, setError] = useState('');

    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [field]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Validation
        if (!formData.firstName || !formData.lastName || !formData.phoneNumber || !formData.password || !confirmPassword) {
            setError('Vui lòng điền đầy đủ thông tin bắt buộc');
            return;
        }

        if (!childDob) {
            setError('Vui lòng nhập ngày sinh của bé');
            return;
        }

        const dobDate = new Date(childDob);
        if (isNaN(dobDate.getTime()) || dobDate > new Date()) {
            setError('Ngày sinh không hợp lệ');
            return;
        }

        if (!childName.trim()) {
            setError('Vui lòng nhập tên của bé');
            return;
        }

        if (formData.password !== confirmPassword) {
            setError('Mật khẩu xác nhận không khớp');
            return;
        }

        if (formData.password.length < 6) {
            setError('Mật khẩu phải có ít nhất 6 ký tự');
            return;
        }

        try {
            const payload = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                phoneNumber: formData.phoneNumber,
                password: formData.password,
                childFirstName: childName.trim(),
                childDob: new Date(childDob).toISOString(),
            };
            await register(payload);
            console.log('Registration successful', payload);
            navigate('/signin');
        } catch (err) {
            setError('Đăng ký thất bại. Vui lòng thử lại.');
        }
    };

    return (
        <AuthLayout>
            <Logo size="large" />

            <Typography variant="h4" component="h1" gutterBottom>
                Đăng ký tài khoản
            </Typography>

            {error && (
                <Alert severity="error" sx={{ width: '100%' }}>
                    {error}
                </Alert>
            )}

            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2.5,
                }}
            >

                <TextField
                    fullWidth
                    label="Họ phụ huynh"
                    value={formData.lastName}
                    onChange={handleChange('lastName')}
                />

                <TextField
                    fullWidth
                    label="Tên phụ huynh"
                    value={formData.firstName}
                    onChange={handleChange('firstName')}
                />

                <TextField
                    fullWidth
                    label="Số điện thoại phụ huynh"
                    type="text"
                    value={formData.phoneNumber}
                    onChange={handleChange('phoneNumber')}
                />

                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                            fullWidth
                            label="Mật khẩu *"
                            type="password"
                            value={formData.password}
                            onChange={handleChange('password')}
                            autoComplete="new-password"
                        />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                            fullWidth
                            label="Xác nhận mật khẩu *"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            autoComplete="new-password"
                        />
                    </Grid>
                </Grid>

                <TextField
                    fullWidth
                    label="Tên bé *"
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                />

                
                <TextField
                    fullWidth
                    label="Ngày sinh của bé *"
                    type="date"
                    value={childDob}
                    onChange={(e) => setChildDob(e.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    helperText="Để tính chính xác tuổi của bé"
                    autoFocus
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    size="large"
                    fullWidth
                    sx={{ mt: 1 }}
                >
                    Đăng ký
                </Button>

                <Box sx={{ textAlign: 'center', mt: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                        Đã có tài khoản?{' '}
                        <Link
                            component={RouterLink}
                            to="/signin"
                            sx={{
                                color: 'primary.main',
                                fontWeight: 600,
                                textDecoration: 'none',
                                '&:hover': {
                                    textDecoration: 'underline',
                                },
                            }}
                        >
                            Đăng nhập
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </AuthLayout>
    );
};

export default Register;
