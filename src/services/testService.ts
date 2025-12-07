import type { Question } from '../types/test.types';
import catImage from '../assets/images/cat.png';
import horseImage from '../assets/images/horse.png';
import birdImage from '../assets/images/bird.png';
import dogImage from '../assets/images/dog.png';
import girlImage from '../assets/images/girl.png';

// Mock test data
export const mockQuestions: Question[] = [
    {
        id: '1',
        type: 'mcq',
        question: 'Cái bát dùng để làm gì?',
        options: [
            'Cái bát dùng để làm gì?',
            'Cái bát dùng để ăn cơm.',
        ],
        correctAnswer: 1,
    },
    {
        id: '2',
        type: 'mcq',
        question: 'Ba mẹ đặt những câu hỏi sau và yêu cầu bé trả lời thành câu hoàn chỉnh.',
        options: [
            'Cái cốc dùng để làm gì?',
            'Cái ghế dùng để làm gì?',
            'Cái bút chì dùng để làm gì?',
        ],
        correctAnswer: 0,
    },
    {
        id: '3',
        type: 'saq',
        question: 'Ba mẹ đặt những câu hỏi sau và yêu cầu bé trả lời thành câu hoàn chỉnh.',
        examples: [
            'Cái bát dùng để làm gì?',
            'Cái bát dùng để ăn cơm.',
        ],
        helperText: '*Ba mẹ không ra tín hiệu bằng mắt, bằng tay hay hành động.',
    },
    {
        id: '4',
        type: 'image-selection',
        question: 'Chọn những hình ảnh bé thích',
        images: [
            { id: 'cat', url: catImage, alt: 'Mèo' },
            { id: 'horse', url: horseImage, alt: 'Ngựa' },
            { id: 'bird', url: birdImage, alt: 'Chim' },
            { id: 'dog', url: dogImage, alt: 'Chó' },
            { id: 'girl', url: girlImage, alt: 'Gái' },
        ],
        correctAnswers: [], // No correct answer for preference questions
    },
];

export const getQuestions = async (): Promise<Question[]> => {
    // Simulate API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockQuestions);
        }, 500);
    });
};

export const submitTest = async (answers: any[]): Promise<{ success: boolean }> => {
    // Simulate API call
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Test submitted:', answers);
            resolve({ success: true });
        }, 1000);
    });
};

