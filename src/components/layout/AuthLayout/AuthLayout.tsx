import { Box, Container, Paper } from '@mui/material';
import type { ReactNode } from 'react';

interface AuthLayoutProps {
    children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #E1F5FE 0%, #B3E5FC 100%)',
                padding: 2,
            }}
        >
            <Container maxWidth="sm">
                <Paper
                    elevation={2}
                    sx={{
                        padding: { xs: 3, sm: 4, md: 5 },
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 3,
                    }}
                    className="animate-fadeIn"
                >
                    {children}
                </Paper>
            </Container>
        </Box>
    );
};

export default AuthLayout;
