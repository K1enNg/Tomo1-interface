export type QuestionType = 'mcq' | 'saq' | 'image-selection';

export interface BaseQuestion {
    id: string;
    type: QuestionType;
    question: string;
}

export interface MCQQuestion extends BaseQuestion {
    type: 'mcq';
    options: string[];
    correctAnswer: number;
}

export interface SAQQuestion extends BaseQuestion {
    type: 'saq';
    examples?: string[];
    helperText?: string;
}

export interface ImageSelectionQuestion extends BaseQuestion {
    type: 'image-selection';
    images: {
        id: string;
        url: string;
        alt: string;
    }[];
    correctAnswers: string[];
}

export type Question = MCQQuestion | SAQQuestion | ImageSelectionQuestion;

export interface TestAnswer {
    questionId: string;
    answer: string | number | string[];
    timeSpent: number;
}

export interface TestState {
    currentQuestionIndex: number;
    answers: TestAnswer[];
    startTime: number;
    isComplete: boolean;
}

export interface TestContextType {
    questions: Question[];
    testState: TestState;
    currentQuestion: Question | null;
    progress: number;
    answerQuestion: (answer: string | number | string[]) => void;
    nextQuestion: () => void;
    previousQuestion: () => void;
    skipQuestion: () => void;
    completeTest: () => void;
    resetTest: () => void;
}
