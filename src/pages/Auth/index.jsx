import React from 'react';
import { Route } from 'react-router-dom';

import { LoginForm } from '../../modules';

import './Auth.scss';

const Auth = () => (
    <section className="auth">
        <div className="auth__cont">
            <Route exact path="/" component={LoginForm} />
            <Route exact path="/register" component={RegisterForm} />
        </div>
    </section>
);

export default Auth;