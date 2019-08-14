import React, { Component } from 'react';
import {Checkbox, Form, Icon, Input} from "antd";
import {Button, InputBlock} from "../../../components";
import {Link} from "react-router-dom";

class RegisterForm extends Component {
    render() {
        return (
            <div>
                <div className="auth__title">
                    <h2> Регистрация</h2>
                    <p>Для входа в чат, Вам необходимо зарегистрироваться</p>
                </div>
                <InputBlock>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item hasFeedback validateStatus="success">
                        <Input
                            size="large"
                            prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            placeholder="E-mail"
                        />
                    </Form.Item>
                    <Form.Item hasFeedback validateStatus="success">
                        <Input
                            size="large"
                            prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            type="text"
                            placeholder="Ваше имя"
                            hasFeedback
                        />
                    </Form.Item>
                    <Form.Item hasFeedback validateStatus="success">
                            <Input
                                size="large"
                                prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                type="password"
                                placeholder="Пароль"
                                hasFeedback
                            />
                     </Form.Item>
                     <Form.Item hasFeedback validateStatus="success">
                         <Input
                             size="large"
                             prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                             type="password"
                             placeholder="Повторите пароль"
                             hasFeedback
                         />
                     </Form.Item>
                    <Form.Item>
                        <Checkbox>Сохранить данные</Checkbox>

                        <Button type="primary" htmlType="submit" size="large" className="login-form-button" block>
                            Зарегистрироваться
                        </Button>
                    </Form.Item>
                        <Link className="auth__register-link" to="/">Войти</Link>
                    </Form>
                </InputBlock>
            </div>
        )
    }
}

export default RegisterForm;

