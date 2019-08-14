import React, { Component } from 'react';
import {Checkbox, Form, Icon, Input} from "antd";
import {Button, InputBlock} from "../../../components";
import { Link } from 'react-router-dom';

class LoginForm extends Component {
    render() {
        return (
            <div>
                <div className="auth__title">
                    <h2> Войти в аккаунт</h2>
                    <p>Пожайлуста, войдите в свой аккаунт</p>
                </div>
                <InputBlock>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item hasFeedback validateStatus="success">
                        <Input
                            size="large"
                            prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            placeholder="Username"
                        />
                    </Form.Item>
                    <Form.Item hasFeedback validateStatus="success">
                        <Input
                            size="large"
                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            type="password"
                            placeholder="Password"
                            hasFeedback
                        />
                    </Form.Item>
                    <Form.Item>
                        <Checkbox>Сохранить данные</Checkbox>

                        <Button type="primary" htmlType="submit" size="large" className="login-form-button" block>
                            Войти
                        </Button>
                    </Form.Item>
                    <Link className="auth__register-link" to="/register">Зарегистрироваться</Link>
                    </Form>
                </InputBlock>
            </div>
        )
    }
}

export default LoginForm;

