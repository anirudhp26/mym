import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import LoginAuth from './LoginAuth';
import Home from './Home';
export default function MainApp() {
    const { auth } = useContext(AuthContext);

    return (
        <>
            {auth ? <Home /> : <LoginAuth />}
        </>
    )
}
