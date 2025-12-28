export interface DenverLanguageQuestion {
    questionId: string;
    text: string;
    ageMonthMin: number;
    ageMonthMax: number;
    category: 'receptive' | 'expressive';
    type?: 'yes-no' | 'multiple';
    options?: string[];
    minCorrect?: number;
    image?: string;
    audio?: string;
    isDuplicate?: boolean;
    duplicateOf?: string;
}

export interface ChildInfo {
    name: string;
    dateOfBirth: Date;
}

export interface ExactAge {
    years: number;
    months: number;
    days: number;
    totalMonths: number;
    totalDays: number;
}

export interface DenverQuestionResult {
    questionId: string;
    question: string;
    result: 'D' | 'K'; // D = Pass, K = Fail
    isReused: boolean;
    rawAnswer?: any;
}

export interface DenverTestResult {
    child: ChildInfo;
    chronologicalAge: ExactAge;
    mentalAge: ExactAge;
    classLevel: 'Mầm' | 'Chồi' | 'Lá';
    questionResults: DenverQuestionResult[];
    stoppingPoint?: {
        questionId: string;
        question: string;
        mentalAgeMonths: number;
    };
    testDate: Date;
}

export interface DenverTestState {
    childInfo: ChildInfo | null;
    chronologicalAge: ExactAge | null;
    questionResults: DenverQuestionResult[];
    currentQuestionIndex: number;
    isComplete: boolean;
    finalResult: DenverTestResult | null;
}