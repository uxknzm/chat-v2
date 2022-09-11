import React from 'react';
import * as C from './Styles'
import { auth, provider } from '../../Services/Firebase'


const Login = () => {
    const handleSignIn = () => {
        auth.signInWithPopup(provider).catch(alert)
    }
    return (
        <C.Container>
            <C.Button onClick={handleSignIn}>Войти</C.Button>
        </C.Container>
    );
};

export default Login;