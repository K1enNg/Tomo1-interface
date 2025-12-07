import { Box } from '@mui/material';
import mascotImage from '../../../assets/images/mascot.png';
import '../../../styles/animations.css';

interface BirdMascotProps {
    animation?: 'bounce' | 'wiggle' | 'celebrate' | 'float' | 'none';
    size?: number;
}

const BirdMascot = ({ animation = 'float', size = 200 }: BirdMascotProps) => {
    const animationClass = animation !== 'none' ? `animate-${animation}` : '';

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 2,
            }}
        >
            <img
                src={mascotImage}
                alt="Friendly Bird Mascot"
                className={animationClass}
                style={{
                    width: size,
                    height: size,
                    objectFit: 'contain',
                }}
            />
        </Box>
    );
};

export default BirdMascot;
