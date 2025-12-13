export interface User {
    id: string;
    name: string;
    phoneNumber: string;
    role: 'child' | 'parent' | 'admin';
}

export interface LoginCredentials {
    phoneNumber: string;
    password: string;
    rememberMe?: boolean;
}

export interface RegisterData {
    childName?: string;
    email?: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
}

export interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (credentials: LoginCredentials) => Promise<void>;
    register: (data: RegisterData) => Promise<void>;
    logout: () => void;
    isLoading: boolean;
}

