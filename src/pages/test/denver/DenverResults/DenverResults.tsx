import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Chip,
    IconButton,
    Alert,
} from '@mui/material';
import { CheckCircle as CheckCircleIcon, Settings as SettingsIcon } from '@mui/icons-material';
import TestLayout from '../../../../components/layout/TestLayout/TestLayout';
import BirdMascot from '../../../../components/mascot/BirdMascot/BirdMascot';
import { formatAge } from '../../../../services/ageCalculationService';
import { calculateTestStatistics } from '../../../../services/denverTestService';
import type { DenverTestResult } from '../../../../types/denver.types';

const DenverResults = () => {
    const navigate = useNavigate();
    const [result, setResult] = useState<DenverTestResult | null>(null);
    const [statistics, setStatistics] = useState<any>(null);

    useEffect(() => {
        const savedResult = sessionStorage.getItem('denverTestResult');
        if (!savedResult) {
            navigate('/denver/intro');
            return;
        }

        const parsedResult = JSON.parse(savedResult) as DenverTestResult;
        setResult(parsedResult);

        const stats = calculateTestStatistics(parsedResult);
        setStatistics(stats);
    }, [navigate]);

    const handleReturnHome = () => {
        // Clear session data
        sessionStorage.removeItem('denverChildInfo');
        sessionStorage.removeItem('denverTestResult');
        navigate('/signin');
    };

    if (!result || !statistics) {
        return (
            <TestLayout>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 400 }}>
                    <Typography>Đang tải kết quả...</Typography>
                </Box>
            </TestLayout>
        );
    }

    const classLevelColors: Record<string, 'primary' | 'info' | 'success' | 'warning'> = {
        'Mầm': 'info',
        'Chồi': 'success',
        'Lá': 'warning',
    };

    return (
        <TestLayout>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h3" component="h1" sx={{ fontWeight: 700 }}>
                    Kết quả đánh giá
                </Typography>
                <IconButton
                    sx={{
                        backgroundColor: 'white',
                        '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
                    }}
                >
                    <SettingsIcon />
                </IconButton>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                <BirdMascot animation="celebrate" size={280} />
            </Box>

            <CheckCircleIcon
                sx={{
                    display: 'block',
                    mx: 'auto',
                    fontSize: 80,
                    color: 'success.main',
                    mb: 2,
                }}
            />

            <Typography
                variant="h4"
                component="h2"
                sx={{
                    textAlign: 'center',
                    fontWeight: 700,
                    color: 'success.main',
                    mb: 4,
                }}
            >
                Hoàn thành đánh giá!
            </Typography>

            {/* Child Information Card */}
            <Card sx={{ mb: 3 }}>
                <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                        Thông tin bé
                    </Typography>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                        <Box>
                            <Typography variant="caption" color="text.secondary">
                                Tên
                            </Typography>
                            <Typography variant="body1" sx={{ fontWeight: 600 }}>
                                {result.child.name}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="caption" color="text.secondary">
                                Ngày sinh
                            </Typography>
                            <Typography variant="body1" sx={{ fontWeight: 600 }}>
                                {new Date(result.child.dateOfBirth).toLocaleDateString('vi-VN')}
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>

            {/* Age Information Card */}
            <Card sx={{ mb: 3 }}>
                <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                        Độ tuổi
                    </Typography>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
                        <Box
                            sx={{
                                p: 2,
                                backgroundColor: 'rgba(129, 212, 250, 0.1)',
                                borderRadius: 2,
                            }}
                        >
                            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                                Tuổi thực tế
                            </Typography>
                            <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
                                {formatAge(result.chronologicalAge)}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                p: 2,
                                backgroundColor: 'rgba(255, 213, 79, 0.1)',
                                borderRadius: 2,
                            }}
                        >
                            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                                Độ tuổi về mặt ngôn ngữ
                            </Typography>
                            <Typography variant="h6" sx={{ fontWeight: 700, color: 'secondary.main' }}>
                                {formatAge(result.mentalAge)}
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>

            {/* Classification Card */}
            <Card sx={{ mb: 3, border: '3px solid', borderColor: 'success.main' }}>
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                        Phân loại lớp học
                    </Typography>
                    <Chip
                        label={result.classLevel}
                        size="medium"
                        sx={{
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            py: 3,
                            px: 2,
                        }}
                        color={classLevelColors[result.classLevel]}
                        variant="filled"
                    />
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                        {result.classLevel === 'Mầm'
                            ? '(1-2 tuổi) Lớp Mầm dành cho trẻ phát triển ngôn ngữ sơ khai'
                            : result.classLevel === 'Chồi'
                                ? '(2-3 tuổi) Lớp Chồi dành cho trẻ phát triển ngôn ngữ cơ bản'
                                : '(3-4 tuổi) Lớp Lá dành cho trẻ phát triển ngôn ngữ nâng cao'}
                    </Typography>
                </CardContent>
            </Card>

            {/* Statistics Card */}
            <Card sx={{ mb: 3 }}>
                <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                        Thống kê
                    </Typography>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 2 }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="body2" color="text.secondary">
                                Tổng câu hỏi
                            </Typography>
                            <Typography variant="h6" sx={{ fontWeight: 700, mt: 1 }}>
                                {statistics.totalQuestionsAsked}
                            </Typography>
                        </Box>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="body2" color="text.secondary">
                                Câu đúng
                            </Typography>
                            <Typography variant="h6" sx={{ fontWeight: 700, mt: 1, color: 'success.main' }}>
                                {statistics.passCount}
                            </Typography>
                        </Box>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="body2" color="text.secondary">
                                Tỷ lệ thành công
                            </Typography>
                            <Typography variant="h6" sx={{ fontWeight: 700, mt: 1 }}>
                                {statistics.passPercentage.toFixed(1)}%
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>

            {/* Questions Detailed Results */}
            <Card sx={{ mb: 3 }}>
                <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                        Chi tiết câu hỏi
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table size="small">
                            <TableHead>
                                <TableRow sx={{ backgroundColor: 'primary.light' }}>
                                    <TableCell sx={{ fontWeight: 700 }}>Câu hỏi</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 700 }}>
                                        Kết quả
                                    </TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 700 }}>
                                        Tái sử dụng
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {result.questionResults.map((qr, index) => (
                                    <TableRow key={index}>
                                        <TableCell sx={{ fontSize: '0.875rem' }}>
                                            {qr.question.substring(0, 50)}...
                                        </TableCell>
                                        <TableCell align="center">
                                            <Chip
                                                label={qr.result === 'D' ? 'Đúng' : 'Sai'}
                                                size="small"
                                                color={qr.result === 'D' ? 'success' : 'error'}
                                                variant="outlined"
                                            />
                                        </TableCell>
                                        <TableCell align="center">
                                            {qr.isReused ? '✓' : '-'}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>

            {/* Stopping Point Info */}
            {result.stoppingPoint && result.stoppingPoint.questionId && (
                <Alert severity="info" sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        Điểm dừng: {result.stoppingPoint.question}
                    </Typography>
                    <Typography variant="caption" sx={{ mt: 1 }}>
                        Độ tuổi tương ứng: {result.stoppingPoint.mentalAgeMonths} tháng
                    </Typography>
                </Alert>
            )}

            <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    fullWidth
                    onClick={handleReturnHome}
                >
                    Về trang chủ
                </Button>
            </Box>
        </TestLayout>
    );
};

export default DenverResults;