import { useState } from 'react';
import {
    Box,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    Link,
    Typography,
    Alert,
} from '@mui/material';
import { login } from '../../../api/auth.ts';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import AuthLayout from '../../../components/layout/AuthLayout/AuthLayout';
import Logo from '../../../components/common/Logo/Logo';

const SignIn = () => {
    const navigate = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Basic validation
        if (!phoneNumber || !password) {
            setError('Please fill in all fields');
            return;
        }

        // Mock authentication - replace with actual API call
        try {
            // Simulate API call

            const response = await login({ phoneNumber, password });

            if (response?.access_token) {
                sessionStorage.setItem('access_token', response.access_token);
            }

            if (Array.isArray(response?.children) && response.children.length > 0) {
                const child = response.children[0];
                if (child?.firstName && child?.dob) {
                    sessionStorage.setItem('denverChildInfo', JSON.stringify({
                        name: child.firstName,
                        dateOfBirth: child.dob,
                    }));
                }
            }
            // For demo purposes, accept any phoneNumber/password
            console.log('Login successful', { phoneNumber, rememberMe });
            navigate('/denver/intro');
        } catch (err) {
            setError('Mật Khẩu hay Số Điện Thoại không đúng. Vui lòng thử lại.');
        }
    };

    return (
        <AuthLayout>
            <Logo size="large" />

            <Typography variant="h4" component="h1" gutterBottom>
                Đăng nhập
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
                    label="Số điện thoại"
                    type="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    autoComplete="phoneNumber"
                    autoFocus
                />

                <TextField
                    fullWidth
                    label="Mật khẩu"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            color="primary"
                        />
                    }
                    label="Ghi nhớ đăng nhập"
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    size="large"
                    fullWidth
                >
                    Đăng nhập
                </Button>

                <Box sx={{ textAlign: 'center', mt: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                        Chưa có tài khoản?{' '}
                        <Link
                            component={RouterLink}
                            to="/register"
                            sx={{
                                color: 'primary.main',
                                fontWeight: 600,
                                textDecoration: 'none',
                                '&:hover': {
                                    textDecoration: 'underline',
                                },
                            }}
                        >
                            Đăng ký ngay
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </AuthLayout>
    );
};

export default SignIn;
