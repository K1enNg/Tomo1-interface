import { Box, IconButton } from '@mui/material';
import { Settings as SettingsIcon } from '@mui/icons-material';

const Homepage = () => {
    const handleLessonClick = () => {
        // TODO: Navigate to lesson page when implemented
        // For now, this is a placeholder
        console.log('Lesson clicked - navigate to lesson page');
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #E1F5FE 0%, #B3E5FC 100%)',
                padding: 0,
                position: 'relative',
            }}
        >
            {/* Main Content */}
            <Box sx={{ padding: { xs: 2, sm: 3 } }}>
                {/* Header Section */}
                <Box
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: 3,
                        padding: 2,
                        mb: 3,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                    }}
                >
                    {/* Profile Picture Placeholder */}
                    <Box
                        sx={{
                            width: 60,
                            height: 60,
                            borderRadius: '50%',
                            backgroundColor: '#9E9E9E',
                            flexShrink: 0,
                        }}
                    />
                    
                    {/* Name/Title Placeholder */}
                    <Box
                        sx={{
                            flex: 1,
                            height: 24,
                            borderRadius: 2,
                            backgroundColor: '#9E9E9E',
                        }}
                    />

                    {/* Settings Button */}
                    <IconButton
                        sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.8)' },
                        }}
                    >
                        <SettingsIcon />
                    </IconButton>
                </Box>

                {/* Content Section 1 */}
                <Box sx={{ mb: 3 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 2,
                            position: 'relative',
                            minHeight: 200,
                        }}
                    >
                        {/* Large circle - left */}
                        <Box
                            onClick={handleLessonClick}
                            sx={{
                                width: 80,
                                height: 80,
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                position: 'absolute',
                                left: 0,
                                top: 20,
                                cursor: 'pointer',
                                transition: 'transform 0.2s, opacity 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                    opacity: 0.9,
                                },
                            }}
                        />
                        
                        {/* Large circle - upper middle */}
                        <Box
                            onClick={handleLessonClick}
                            sx={{
                                width: 80,
                                height: 80,
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                position: 'absolute',
                                left: '35%',
                                top: 0,
                                cursor: 'pointer',
                                transition: 'transform 0.2s, opacity 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                    opacity: 0.9,
                                },
                            }}
                        />
                        
                        {/* Medium circle - upper right */}
                        <Box
                            onClick={handleLessonClick}
                            sx={{
                                width: 60,
                                height: 60,
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                position: 'absolute',
                                right: 20,
                                top: 10,
                                cursor: 'pointer',
                                transition: 'transform 0.2s, opacity 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                    opacity: 0.9,
                                },
                            }}
                        />
                        
                        {/* Small circle - below upper middle */}
                        <Box
                            onClick={handleLessonClick}
                            sx={{
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                position: 'absolute',
                                left: '38%',
                                top: 90,
                                cursor: 'pointer',
                                transition: 'transform 0.2s, opacity 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                    opacity: 0.9,
                                },
                            }}
                        />
                        
                        {/* Medium circle - below upper right */}
                        <Box
                            onClick={handleLessonClick}
                            sx={{
                                width: 60,
                                height: 60,
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                position: 'absolute',
                                right: 20,
                                top: 80,
                                cursor: 'pointer',
                                transition: 'transform 0.2s, opacity 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                    opacity: 0.9,
                                },
                            }}
                        />
                        
                        {/* Two medium circles - right side stacked */}
                        <Box
                            onClick={handleLessonClick}
                            sx={{
                                width: 50,
                                height: 50,
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                position: 'absolute',
                                right: 40,
                                top: 150,
                                cursor: 'pointer',
                                transition: 'transform 0.2s, opacity 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                    opacity: 0.9,
                                },
                            }}
                        />
                        <Box
                            onClick={handleLessonClick}
                            sx={{
                                width: 50,
                                height: 50,
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                position: 'absolute',
                                right: 20,
                                top: 200,
                                cursor: 'pointer',
                                transition: 'transform 0.2s, opacity 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                    opacity: 0.9,
                                },
                            }}
                        />
                        
                        {/* Small circle - lower middle */}
                        <Box
                            onClick={handleLessonClick}
                            sx={{
                                width: 35,
                                height: 35,
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                position: 'absolute',
                                left: '45%',
                                bottom: 0,
                                cursor: 'pointer',
                                transition: 'transform 0.2s, opacity 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                    opacity: 0.9,
                                },
                            }}
                        />
                    </Box>
                    
                    {/* Separator Line */}
                    <Box
                        sx={{
                            width: '100%',
                            height: 4,
                            backgroundColor: 'white',
                            borderRadius: 2,
                            mt: 3,
                        }}
                    />
                </Box>

                {/* Content Section 2 */}
                <Box sx={{ mb: 3 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 2,
                            position: 'relative',
                            minHeight: 180,
                        }}
                    >
                        {/* Large circle - upper middle */}
                        <Box
                            onClick={handleLessonClick}
                            sx={{
                                width: 80,
                                height: 80,
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                position: 'absolute',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                top: 0,
                                cursor: 'pointer',
                                transition: 'transform 0.2s, opacity 0.2s',
                                '&:hover': {
                                    transform: 'translateX(-50%) scale(1.1)',
                                    opacity: 0.9,
                                },
                            }}
                        />
                        
                        {/* Two medium circles - left side stacked */}
                        <Box
                            onClick={handleLessonClick}
                            sx={{
                                width: 60,
                                height: 60,
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                position: 'absolute',
                                left: 10,
                                top: 30,
                                cursor: 'pointer',
                                transition: 'transform 0.2s, opacity 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                    opacity: 0.9,
                                },
                            }}
                        />
                        <Box
                            onClick={handleLessonClick}
                            sx={{
                                width: 60,
                                height: 60,
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                position: 'absolute',
                                left: 30,
                                top: 100,
                                cursor: 'pointer',
                                transition: 'transform 0.2s, opacity 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                    opacity: 0.9,
                                },
                            }}
                        />
                        
                        {/* Two medium circles - right side stacked */}
                        <Box
                            onClick={handleLessonClick}
                            sx={{
                                width: 60,
                                height: 60,
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                position: 'absolute',
                                right: 10,
                                top: 30,
                                cursor: 'pointer',
                                transition: 'transform 0.2s, opacity 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                    opacity: 0.9,
                                },
                            }}
                        />
                        <Box
                            onClick={handleLessonClick}
                            sx={{
                                width: 60,
                                height: 60,
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                position: 'absolute',
                                right: 30,
                                top: 100,
                                cursor: 'pointer',
                                transition: 'transform 0.2s, opacity 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                    opacity: 0.9,
                                },
                            }}
                        />
                        
                        {/* Small circle - lower middle */}
                        <Box
                            onClick={handleLessonClick}
                            sx={{
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                position: 'absolute',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                bottom: 0,
                                cursor: 'pointer',
                                transition: 'transform 0.2s, opacity 0.2s',
                                '&:hover': {
                                    transform: 'translateX(-50%) scale(1.1)',
                                    opacity: 0.9,
                                },
                            }}
                        />
                    </Box>
                    
                    {/* Separator Line */}
                    <Box
                        sx={{
                            width: '100%',
                            height: 4,
                            backgroundColor: 'white',
                            borderRadius: 2,
                            mt: 3,
                        }}
                    />
                </Box>

                {/* Content Section 3 */}
                <Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 2,
                            position: 'relative',
                            minHeight: 160,
                        }}
                    >
                        {/* Large circle - left */}
                        <Box
                            onClick={handleLessonClick}
                            sx={{
                                width: 80,
                                height: 80,
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                position: 'absolute',
                                left: 0,
                                top: 20,
                                cursor: 'pointer',
                                transition: 'transform 0.2s, opacity 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                    opacity: 0.9,
                                },
                            }}
                        />
                        
                        {/* Medium circle - upper middle */}
                        <Box
                            onClick={handleLessonClick}
                            sx={{
                                width: 60,
                                height: 60,
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                position: 'absolute',
                                left: '40%',
                                top: 10,
                                cursor: 'pointer',
                                transition: 'transform 0.2s, opacity 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                    opacity: 0.9,
                                },
                            }}
                        />
                        
                        {/* Two medium circles - right side stacked */}
                        <Box
                            onClick={handleLessonClick}
                            sx={{
                                width: 60,
                                height: 60,
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                position: 'absolute',
                                right: 10,
                                top: 20,
                                cursor: 'pointer',
                                transition: 'transform 0.2s, opacity 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                    opacity: 0.9,
                                },
                            }}
                        />
                        <Box
                            onClick={handleLessonClick}
                            sx={{
                                width: 60,
                                height: 60,
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                position: 'absolute',
                                right: 30,
                                top: 90,
                                cursor: 'pointer',
                                transition: 'transform 0.2s, opacity 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                    opacity: 0.9,
                                },
                            }}
                        />
                        
                        {/* Small circle - lower middle */}
                        <Box
                            onClick={handleLessonClick}
                            sx={{
                                width: 35,
                                height: 35,
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                position: 'absolute',
                                left: '45%',
                                bottom: 0,
                                cursor: 'pointer',
                                transition: 'transform 0.2s, opacity 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                    opacity: 0.9,
                                },
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Homepage;

