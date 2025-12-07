import { createTheme } from '@mui/material/styles';

// Custom theme for educational platform
const muiTheme = createTheme({
    palette: {
        primary: {
            main: '#81D4FA', // Light blue
            light: '#B3E5FC',
            dark: '#4FC3F7',
            contrastText: '#1A237E',
        },
        secondary: {
            main: '#FFD54F', // Yellow
            light: '#FFE082',
            dark: '#FFB74D', // Orange
            contrastText: '#3E2723',
        },
        background: {
            default: '#E1F5FE', // Very light blue
            paper: '#FFFFFF',
        },
        success: {
            main: '#66BB6A',
            light: '#81C784',
        },
        error: {
            main: '#EF5350',
            light: '#E57373',
        },
        text: {
            primary: '#1A237E', // Dark blue
            secondary: '#455A64',
        },
    },
    typography: {
        fontFamily: '"Quicksand", "Poppins", "Roboto", "Arial", sans-serif',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#1A237E',
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 600,
            color: '#1A237E',
        },
        h3: {
            fontSize: '1.75rem',
            fontWeight: 600,
            color: '#1A237E',
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 600,
            color: '#1A237E',
        },
        body1: {
            fontSize: '1.125rem',
            lineHeight: 1.6,
        },
        body2: {
            fontSize: '1rem',
            lineHeight: 1.5,
        },
        button: {
            fontSize: '1.125rem',
            fontWeight: 600,
            textTransform: 'none',
        },
    },
    shape: {
        borderRadius: 16,
    },
    spacing: 8,
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 24,
                    padding: '12px 32px',
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
                    },
                },
                containedPrimary: {
                    background: 'linear-gradient(135deg, #81D4FA 0%, #4FC3F7 100%)',
                    '&:hover': {
                        background: 'linear-gradient(135deg, #4FC3F7 0%, #29B6F6 100%)',
                    },
                },
                containedSecondary: {
                    background: 'linear-gradient(135deg, #FFD54F 0%, #FFB74D 100%)',
                    '&:hover': {
                        background: 'linear-gradient(135deg, #FFB74D 0%, #FFA726 100%)',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 20,
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 12,
                        fontSize: '1.125rem',
                        '& fieldset': {
                            borderWidth: 2,
                        },
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: 20,
                },
                elevation1: {
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                },
                elevation2: {
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
                },
            },
        },
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    height: 12,
                    borderRadius: 6,
                },
            },
        },
    },
});

export default muiTheme;
