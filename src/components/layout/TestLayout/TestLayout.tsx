import { Box, Container } from '@mui/material';
import type { ReactNode } from 'react';

interface TestLayoutProps {
    children: ReactNode;
}

const TestLayout = ({ children }: TestLayoutProps) => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #E1F5FE 0%, #B3E5FC 100%)',
                padding: { xs: 2, sm: 3, md: 4 },
            }}
        >
            <Container maxWidth="md">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 3,
                    }}
                    className="animate-fadeIn"
                >
                    {children}
                </Box>
            </Container>
        </Box>
    );
};

export default TestLayout;
