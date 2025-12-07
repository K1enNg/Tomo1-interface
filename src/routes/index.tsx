import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { authRoutes } from './authRoutes';
import { testRoutes } from './testRoutes';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Navigate to="/signin" replace />,
    },
    ...authRoutes,
    ...testRoutes,
    {
        path: '*',
        element: <Navigate to="/signin" replace />,
    },
];
