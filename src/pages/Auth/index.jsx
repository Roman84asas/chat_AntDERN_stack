import React from 'react';
import {Button, InputBlock} from "../../components";

import './Auth.scss';

const Auth = () => {
    return (
        <section className="auth">
            <InputBlock>
                <Button type="primary" size="large" >Button</Button>
            </InputBlock>
        </section>
    );
};

export default Auth;