import type { RouteObject } from 'react-router-dom';
import { TestIntro, TestQuestion, TestComplete } from '../pages/test';

export const testRoutes: RouteObject[] = [
    {
        path: '/test/intro',
        element: <TestIntro />,
    },
    {
        path: '/test/question/:questionId',
        element: <TestQuestion />,
    },
    {
        path: '/test/complete',
        element: <TestComplete />,
    },
];
