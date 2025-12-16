import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { authRoutes } from './authRoutes';
import { denverRoutes } from './denverRoutes';

export const routes: RouteObject[] = [
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
