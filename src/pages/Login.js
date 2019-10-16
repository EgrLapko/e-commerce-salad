import React from 'react';
import SignIn from '../components/login/SignIn';
import SignUp from '../components/login/SignUp';

export default function Login() {
    return (
        <div className="login">
            <SignIn />
            <SignUp />
        </div>
    )
}
