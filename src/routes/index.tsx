import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { authRoutes } from './authRoutes';
import { denverRoutes } from './denverRoutes';
import { Homepage } from '../pages/Homepage';

export const routes: RouteObject[] = [
    {
        path: '/home',
        element: <Homepage />,
    },
    {
        path: '/',
        element: <Navigate to="/signin" replace />,
    },
    ...authRoutes,
    ...denverRoutes,
    {
        path: '*',
        element: <Navigate to="/signin" replace />,
    },
];
