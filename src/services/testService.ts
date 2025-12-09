import type { Question } from '../types/test.types';
import {
    YESNO_QUESTION_LIST,
    MULTIPLE_QUESTION_LIST,
    CC_QUESTION_LIST,
} from '../dummyData/question';

// Mock test data
export const mockQuestions: Question[] = [
    ...YESNO_QUESTION_LIST.map((q) => ({
        id: `yesno_${q.questionId}`,
        type: 'mcq' as const,
        question: Array.isArray(q.question) ? q.question.join(' ') : q.question,
        options: q.choices,
        correctAnswer: 0,
    })),
    ...MULTIPLE_QUESTION_LIST.map((q) => ({
        id: `multiple_${q.questionId}`,
        type: 'mcq' as const,
        question: q.question,
        options: q.choices,
        correctAnswer: 0,
    })),
    ...CC_QUESTION_LIST.map((q) => ({
        id: `cc_${q.questionId}`,
        type: 'saq' as const,
        question: Array.isArray(q.question) ? q.question.join('\n') : q.question,
    })),
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

