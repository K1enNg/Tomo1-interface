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
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import AuthLayout from '../../../components/layout/AuthLayout/AuthLayout';
import Logo from '../../../components/common/Logo/Logo';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        childName: '',
        email: '',
        password: '',
        confirmPassword: '',
        parentName: '',
        parentPhone: '',
    });
    const [error, setError] = useState('');

    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [field]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Validation
        if (!formData.childName || !formData.email || !formData.password || !formData.confirmPassword) {
            setError('Vui lòng điền đầy đủ thông tin bắt buộc');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError('Mật khẩu xác nhận không khớp');
            return;
        }

        if (formData.password.length < 6) {
            setError('Mật khẩu phải có ít nhất 6 ký tự');
            return;
        }

        // Mock registration - replace with actual API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Registration successful', formData);
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
                    label="Tên bé *"
                    value={formData.childName}
                    onChange={handleChange('childName')}
                    autoFocus
                />

                <TextField
                    fullWidth
                    label="Email *"
                    type="email"
                    value={formData.email}
                    onChange={handleChange('email')}
                    autoComplete="email"
                />

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Mật khẩu *"
                            type="password"
                            value={formData.password}
                            onChange={handleChange('password')}
                            autoComplete="new-password"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Xác nhận mật khẩu *"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange('confirmPassword')}
                            autoComplete="new-password"
                        />
                    </Grid>
                </Grid>

                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    Thông tin phụ huynh (không bắt buộc)
                </Typography>

                <TextField
                    fullWidth
                    label="Tên phụ huynh"
                    value={formData.parentName}
                    onChange={handleChange('parentName')}
                />

                <TextField
                    fullWidth
                    label="Số điện thoại phụ huynh"
                    type="tel"
                    value={formData.parentPhone}
                    onChange={handleChange('parentPhone')}
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
