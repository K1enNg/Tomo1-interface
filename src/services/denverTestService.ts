import type {
    DenverLanguageQuestion,
    ExactAge,
    DenverQuestionResult,
    DenverTestResult,
    ChildInfo,
} from '../types/denver.types';
import { DENVER_LANGUAGE_QUESTIONS } from '../dummyData/denverQuestions';
import { calculateExactAge, createAgeFromMonths } from './ageCalculationService';

/**
 * Get the starting question index based on age
 * Returns the last (rightmost) question that the age line intersects
 */
export function getStartingQuestion(
    ageMonths: number,
    questions: DenverLanguageQuestion[]
): DenverLanguageQuestion | null {
    const applicableQuestions = questions.filter((q) => ageMonths >= q.ageMonthMin);

    if (applicableQuestions.length === 0) return null;

    // Return the last applicable question (highest ageMonthMax)
    return applicableQuestions.reduce((latest, current) =>
        current.ageMonthMax > latest.ageMonthMax ? current : latest
    );
}

/**
 * Execute the Denver test algorithm
 * Identifies questions, asks them backward until 3 consecutive D results
 */
export function executeDenverTest(
    childInfo: ChildInfo,
    answers: Map<string, 'D' | 'K'>,
    testDate: Date = new Date()
): DenverTestResult {
    // Calculate exact age
    const chronologicalAge = calculateExactAge(childInfo.dateOfBirth, testDate);
    const ageMonths = chronologicalAge.totalMonths;

    // Get applicable questions for this age
    // Get applicable questions for this age - MUST MATCH getQuestionsForAge logic
    const applicableQuestions = DENVER_LANGUAGE_QUESTIONS.filter(
        (q) => ageMonths >= q.ageMonthMin && ageMonths <= q.ageMonthMax
    ).sort((a, b) => b.ageMonthMax - a.ageMonthMax);

    // Track results and find stopping point
    const questionResults: DenverQuestionResult[] = [];
    let consecutiveDCount = 0;
    let stoppingPoint: DenverLanguageQuestion | null = null;
    const processedQuestions = new Set<string>();

    // Process questions from latest to earliest
    for (const question of applicableQuestions) {
        // Skip if already processed (duplicate handling)
        if (processedQuestions.has(question.questionId)) {
            const previousResult = questionResults.find((r) => r.questionId === question.questionId);
            if (previousResult) {
                questionResults.push({
                    questionId: question.questionId,
                    question: question.text,
                    result: previousResult.result,
                    isReused: true,
                });
                if (previousResult.result === 'D') {
                    consecutiveDCount++;
                } else {
                    consecutiveDCount = 0;
                }
            }
            continue;
        }

        processedQuestions.add(question.questionId);

        // Get answer (default to 'D' if not answered)
        const result = answers.get(question.questionId) || 'D';

        questionResults.push({
            questionId: question.questionId,
            question: question.text,
            result,
            isReused: false,
        });

        // Track consecutive D results
        if (result === 'D') {
            consecutiveDCount++;
            if (consecutiveDCount === 3) {
                stoppingPoint = question;
                break;
            }
        } else {
            consecutiveDCount = 0;
        }
    }

    // Determine mental age from stopping point
    let mentalAgeMonths = 0;
    if (stoppingPoint) {
        mentalAgeMonths = stoppingPoint.ageMonthMax;
    } else if (questionResults.length > 0) {
        // If no stopping point, use age of last question asked
        const lastQuestion = applicableQuestions[applicableQuestions.length - 1];
        mentalAgeMonths = lastQuestion.ageMonthMax;
    }

    const mentalAge = createAgeFromMonths(mentalAgeMonths);

    // Classify child into class level
    const classLevel = classifyChildByAge(mentalAge);

    return {
        child: childInfo,
        chronologicalAge,
        mentalAge,
        classLevel,
        questionResults,
        stoppingPoint: stoppingPoint
            ? {
                questionId: stoppingPoint.questionId,
                question: stoppingPoint.text,
                mentalAgeMonths: stoppingPoint.ageMonthMax,
            }
            : {
                questionId: '',
                question: 'No stopping point reached',
                mentalAgeMonths: mentalAgeMonths,
            },
        testDate,
    };
}

/**
 * Classify child into class level based on mental age
 * 1–2 years → Mầm
 * 2–3 years → Chồi
 * 3–4 years → Lá
 */
export function classifyChildByAge(mentalAge: ExactAge): 'Mầm' | 'Chồi' | 'Lá' {
    const months = mentalAge.totalMonths;

    if (months < 24) {
        return 'Mầm'; // 1-2 years
    } else if (months < 36) {
        return 'Chồi'; // 2-3 years
    } else {
        return 'Lá'; // 3+ years
    }
}

/**
 * Get the next question to ask (going backward from starting point)
 */
export function getNextQuestionToAsk(
    currentIndex: number,
    applicableQuestions: DenverLanguageQuestion[]
): DenverLanguageQuestion | null {
    if (currentIndex >= applicableQuestions.length - 1) {
        return null;
    }
    return applicableQuestions[currentIndex + 1];
}

/**
 * Check if 3 consecutive D results have been reached
 */
export function hasReachedStoppingPoint(results: DenverQuestionResult[]): boolean {
    if (results.length < 3) return false;

    const lastThree = results.slice(-3);
    return lastThree.every((r) => r.result === 'D');
}

/**
 * Calculate test statistics
 */
export function calculateTestStatistics(result: DenverTestResult): {
    totalQuestionsAsked: number;
    passCount: number;
    failCount: number;
    passPercentage: number;
} {
    const totalQuestionsAsked = result.questionResults.length;
    const passCount = result.questionResults.filter((r) => r.result === 'K').length;
    const failCount = result.questionResults.filter((r) => r.result === 'D').length;
    const passPercentage = totalQuestionsAsked > 0 ? (passCount / totalQuestionsAsked) * 100 : 0;

    return {
        totalQuestionsAsked,
        passCount,
        failCount,
        passPercentage,
    };
}