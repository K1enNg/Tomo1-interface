import type { RouteObject } from 'react-router-dom';
import { SignIn, Register } from '../pages/auth';

export const authRoutes: RouteObject[] = [
    {
        path: '/signin',
        element: <SignIn />,
    },
    {
        path: '/register',
        element: <Register />,
    },
];
