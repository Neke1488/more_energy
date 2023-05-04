import React from 'react';
import { useLocation } from 'react-router-dom';
import LoginPage from './auth/login';
import RegistrationPage from './auth/registration';

const AuthRootComponent = () => {
    const location = useLocation();
    return (
    location.pathname === '/login' ? <LoginPage /> : location.pathname === '/registration' ? <RegistrationPage /> : null
    );
};

export default AuthRootComponent;