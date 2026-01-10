import type { RouteObject } from 'react-router-dom';
import { DenverIntro, DenverTest, DenverResults } from '../pages/test/denver';

export const denverRoutes: RouteObject[] = [
    {
        path: '/denver/intro',
        element: <DenverIntro />,
    },
    {
        path: '/denver/test',
        element: <DenverTest />,
    },
    {
        path: '/denver/results',
        element: <DenverResults />,
    },
];
