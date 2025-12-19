const url = import.meta.env.VITE_API_URL;

export interface TestAnswerPayload {
    questionId: string;
    answer: string | number | string[];
    timeSpent: number;
}

export interface SubmitTestPayload {
    childId: string;
    testType: "yesno" | "multiple" | "cc";
    answers: TestAnswerPayload[];
    totalTimeSpent: number;
}

export interface TestResultResponse {
    id: string;
    childId: string;
    testType: string;
    score: number;
    completedAt: string;
    createdAt: string;
}

// Submit test answers to backend
export async function submitTestAnswers(payload: SubmitTestPayload) {
    const token = localStorage.getItem("access_token");

    const res = await fetch(`${url}/test/submit`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        body: JSON.stringify(payload),
    });

    if (!res.ok) {
        throw new Error(await res.text());
    }

    return res.json();
}

// Get test results for a child
export async function getTestResults(childId: string) {
    const token = localStorage.getItem("access_token");

    const res = await fetch(`${url}/test/results/${childId}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        credentials: "include",
    });

    if (!res.ok) {
        throw new Error(await res.text());
    }

    return res.json();
}

// Get specific test result
export async function getTestResult(testId: string) {
    const token = localStorage.getItem("access_token");

    const res = await fetch(`${url}/test/${testId}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        credentials: "include",
    });

    if (!res.ok) {
        throw new Error(await res.text());
    }

    return res.json();
}
