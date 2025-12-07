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
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import AuthLayout from '../../../components/layout/AuthLayout/AuthLayout';
import Logo from '../../../components/common/Logo/Logo';

const SignIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Basic validation
        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }

        // Mock authentication - replace with actual API call
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            // For demo purposes, accept any email/password
            console.log('Login successful', { email, rememberMe });
            navigate('/test/intro');
        } catch (err) {
            setError('Invalid email or password');
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
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
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
