import React from 'react';
import { Form, Icon, Input} from "antd";
import {Button, InputBlock} from "../../../components";
import {Link} from "react-router-dom";



const success  = false;
const RegisterForm = props => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid,
        isSubmitting
    } = props;
    return (
        <div>
            <div className="auth__title">
                <h2> Регистрация</h2>
                <p>Для входа в чат, Вам необходимо зарегистрироваться</p>
            </div>
            <InputBlock>
                {!success ? (
                        <Form onSubmit={handleSubmit} className="login-form">
                            <Form.Item validateStatus={
                                !touched.email ? "" : errors.email ? "error" : "success"}
                                 help={!touched.email ? "" : errors.email}
                                hasFeedback>
                                <Input
                                    id="email"
                                    size="large"
                                    prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    placeholder="E-mail"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
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
                            <Form.Item validateStatus={
                                !touched.password ? "" : errors.password ? "error" : "success"}
                                 help={!touched.password ? "" : errors.password}
                                 hasFeedback>
                                <Input
                                    id="password"
                                    size="large"
                                    prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    type="password"
                                    placeholder="Пароль"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </Form.Item>
                            <Form.Item validateStatus="success"
                                 hasFeedback>
                                <Input
                                    size="large"
                                    prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    placeholder="Повторите пароль"
                                />
                            </Form.Item>
                            <Form.Item>
                                { isSubmitting && !isValid && <span>Ошибка!</span> }
                                <Button onClick={handleSubmit} type="primary" htmlType="submit" size="large" className="login-form-button" block>
                                    Зарегистрироваться
                                </Button>
                            </Form.Item>
                            <Link className="auth__register-link" to="/">Войти</Link>
                        </Form>):
                    <div className="auth__success-block">
                        <div><Icon style={{ fontSize: '45px' }} type="info-circle" theme="twoTone"/></div>
                        <h2>Поддвердите свой аккаунт</h2>
                        <p>На Вашу почту отправлено письмо с сылкой на подтверждение аккаунта</p>
                    </div>}
            </InputBlock>
        </div>
    )
};


export default RegisterForm;

