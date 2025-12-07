import { LinearProgress, Box, Typography } from '@mui/material';

interface ProgressBarProps {
    value: number;
    total: number;
}

const ProgressBar = ({ value, total }: ProgressBarProps) => {
    const percentage = (value / total) * 100;

    return (
        <Box sx={{ width: '100%', mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2" color="text.secondary">
                    Câu hỏi {value} / {total}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {Math.round(percentage)}%
                </Typography>
            </Box>
            <LinearProgress
                variant="determinate"
                value={percentage}
                sx={{
                    height: 12,
                    borderRadius: 6,
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    '& .MuiLinearProgress-bar': {
                        background: 'linear-gradient(90deg, #FFD54F 0%, #FFB74D 100%)',
                    },
                }}
            />
        </Box>
    );
};

export default ProgressBar;
