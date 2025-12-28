import type {
    ExactAge,
    DenverQuestionResult,
} from '../types/denver.types';
import { startEntryTest, submitEntryTest } from '../api/denverQuestions';

/**
 * Start the entry test process
 */
export async function startDenverEntryTest(dob: string) {
    const response = await startEntryTest(dob);
    return {
        questions: response.questions.map(q => ({
            questionId: q.id,
            text: q.text,
            type: q.type,
            options: q.options,
            audio: q.audio,
            ageMonthMin: 0,
            ageMonthMax: 0,
            category: 'receptive' as const
        })),
        ageRange: response.ageRange,
        childAge: response.childAge
    };
}

/**
 * Submit the entry test results
 */
export async function submitDenverEntryTest(dob: string, questionResults: DenverQuestionResult[]) {
    const answers = questionResults.map(r => ({
        questionId: r.questionId,
        value: r.rawAnswer !== undefined ? r.rawAnswer : (r.result === 'D' ? true : false)
    }));

    const response = await submitEntryTest(dob, answers);

    // Map back to DenverTestResult for frontend compatibility
    return {
        child: { name: '', dateOfBirth: new Date(dob) },
        chronologicalAge: response.childAge,
        mentalAge: response.developmentalAge,
        classLevel: response.classification,
        questionResults: response.results.map(r => {
            const originalQuestion = questionResults.find(q => q.questionId === r.questionId);
            return {
                questionId: r.questionId,
                question: originalQuestion?.question || '',
                result: r.result,
                isReused: false,
                rawAnswer: r.rawAnswer
            };
        }),
        summary: response.summary,
        ageRangeLabel: response.ageRange,
        stoppingPoint: response.stoppingPoint ? {
            questionId: response.stoppingPoint.questionId,
            question: response.stoppingPoint.text,
            mentalAgeMonths: response.stoppingPoint.mentalAgeMonths
        } : undefined,
        testDate: new Date()
    };
}


export function classifyChildByAge(mentalAge: ExactAge): 'Mầm' | 'Chồi' | 'Lá' {
    const months = mentalAge.totalMonths;

    if (months < 24) {
        return 'Mầm';
    } else if (months < 36) {
        return 'Chồi';
    } else {
        return 'Lá';
    }
}

/**
 * Calculate test statistics
 */
export function calculateTestStatistics(result: any): {
    totalQuestionsAsked: number;
    passCount: number;
    failCount: number;
    passPercentage: number;
} {
    const results = result.questionResults || [];
    const totalQuestionsAsked = results.length;
    const passCount = results.filter((r: any) => r.result === 'D').length;
    const failCount = results.filter((r: any) => r.result === 'K').length;
    const passPercentage = totalQuestionsAsked > 0 ? (passCount / totalQuestionsAsked) * 100 : 0;

    return {
        totalQuestionsAsked,
        passCount,
        failCount,
        passPercentage,
    };
}
