import { Box } from '@mui/material';
import logoImage from '../../../assets/images/logo.png';

interface LogoProps {
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
}

const Logo = ({ size = 'medium', onClick }: LogoProps) => {
    const sizeMap = {
        small: { width: 120, height: 40 },
        medium: { width: 180, height: 60 },
        large: { width: 240, height: 80 },
    };

    return (
        <Box
            onClick={onClick}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: onClick ? 'pointer' : 'default',
                transition: 'transform 0.3s ease',
                '&:hover': onClick ? {
                    transform: 'scale(1.05)',
                } : {},
            }}
        >
            <img
                src={logoImage}
                alt="Educational Platform Logo"
                style={{
                    width: sizeMap[size].width,
                    height: sizeMap[size].height,
                    objectFit: 'contain',
                }}
            />
        </Box>
    );
};

export default Logo;
