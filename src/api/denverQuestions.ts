import type { DenverLanguageQuestion } from '../types/denver.types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export interface DenverQuestionResponse {
    id: string;
    text: string;
    type: 'yes-no' | 'multiple';
    options?: string[];
    audio?: string;
}

export interface DenverAge {
    years: number;
    months: number;
    days: number;
    totalMonths: number;
    totalDays: number;
}

export interface DenverAgeRange {
    minMonths: number;
    maxMonths: number;
    label: string;
}

export interface DenverStartTestResponse {
    childAge: DenverAge;
    ageRange: DenverAgeRange;
    questions: DenverQuestionResponse[];
}

export interface DenverQuestionResultResponse {
    questionId: string;
    result: 'D' | 'K'; // D = Pass, K = Fail
    rawAnswer: any;
}

export interface DenverSubmitTestResponse {
    childAge: DenverAge;
    mentalAge: DenverAge;
    ageRange: string;
    results: DenverQuestionResultResponse[];
    summary: {
        totalQuestions: number;
        passed: number;
        failed: number;
    };
    stoppingPoint: {
        questionId: string;
        question: string;
        mentalAgeMonths: number;
    };
}

/**
 * Convert backend response to frontend DenverLanguageQuestion type
 */
function convertToDenverQuestion(response: DenverQuestionResponse): DenverLanguageQuestion {
    return {
        questionId: response.id, // Backend uses 'id', frontend uses 'questionId'
        text: response.text,
        ageMonthMin: 0, // Not provided by the new entry-test start endpoint
        ageMonthMax: 0, // Not provided by the new entry-test start endpoint
        category: 'receptive', // Default or mocked for interface compatibility
        type: response.type,
        options: response.options,
        audio: response.audio,
    };
}

/**
 * Fetch all Denver questions from the backend
 */
export async function fetchAllDenverQuestions(): Promise<DenverLanguageQuestion[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/denver-questions`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch Denver questions: ${response.statusText}`);
        }

        const data: DenverQuestionResponse[] = await response.json();
        return data.map(convertToDenverQuestion);
    } catch (error) {
        console.error('Error fetching Denver questions:', error);
        throw error;
    }
}

/**
 * Fetch Denver questions for a specific age in months
 */
export async function fetchDenverQuestionsByAge(ageMonths: number): Promise<DenverLanguageQuestion[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/denver-questions/age/${ageMonths}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch Denver questions for age ${ageMonths}: ${response.statusText}`);
        }

        const data: DenverQuestionResponse[] = await response.json();
        return data.map(convertToDenverQuestion);
    } catch (error) {
        console.error(`Error fetching Denver questions for age ${ageMonths}:`, error);
        throw error;
    }
}

/**
 * Fetch Denver questions by category
 */
export async function fetchDenverQuestionsByCategory(
    category: 'receptive' | 'expressive'
): Promise<DenverLanguageQuestion[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/denver-questions?category=${category}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch Denver questions for category ${category}: ${response.statusText}`);
        }

        const data: DenverQuestionResponse[] = await response.json();
        return data.map(convertToDenverQuestion);
    } catch (error) {
        console.error(`Error fetching Denver questions for category ${category}:`, error);
        throw error;
    }
}

/**
 * Fetch a single Denver question by questionId
 */
export async function fetchDenverQuestionById(questionId: string): Promise<DenverLanguageQuestion> {
    try {
        const response = await fetch(`${API_BASE_URL}/denver-questions/question/${questionId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch Denver question ${questionId}: ${response.statusText}`);
        }

        const data: DenverQuestionResponse = await response.json();
        return convertToDenverQuestion(data);
    } catch (error) {
        console.error(`Error fetching Denver question ${questionId}:`, error);
        throw error;
    }
}

/**
 * Get question count from backend
 */
export async function getDenverQuestionCount(): Promise<number> {
    try {
        const response = await fetch(`${API_BASE_URL}/denver-questions/stats/count`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch question count: ${response.statusText}`);
        }

        const data = await response.json();
        return data.count;
    } catch (error) {
        console.error('Error fetching question count:', error);
        throw error;
    }
}

/**
 * Start Denver entry test
 */
export async function startEntryTest(dob: string, childId?: string): Promise<DenverStartTestResponse> {
    try {
        const response = await fetch(`${API_BASE_URL}/entry-test/start`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ dob, childId }),
        });

        if (!response.ok) {
            throw new Error(`Failed to start Denver entry test: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error starting Denver entry test:', error);
        throw error;
    }
}

/**
 * Submit Denver entry test
 */
export async function submitEntryTest(dob: string, answers: { questionId: string, value: any }[]): Promise<DenverSubmitTestResponse> {
    try {
        const response = await fetch(`${API_BASE_URL}/entry-test/submit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ dob, answers }),
        });

        if (!response.ok) {
            throw new Error(`Failed to submit Denver entry test: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error submitting Denver entry test:', error);
        throw error;
    }
}
