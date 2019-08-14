import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import './Auth.scss';

class Auth extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <section className="auth">
                <div className="auth__cont">
                    <div className="auth__title">
                        <h2> Войти в аккаунт</h2>
                        <p>Пожайлуста, войдите в свой аккаунт</p>
                    </div>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item hasFeedback validateStatus="success">
                            {getFieldDecorator('username', {
                                rules: [{required: true, message: 'Please input your username!'}],
                            })(
                                <Input
                                    size="large"
                                    prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    placeholder="Username"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item hasFeedback validateStatus="success">
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: 'Please input your Password!'}],
                            })(
                                <Input
                                    size="large"
                                    prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    type="password"
                                    placeholder="Password"
                                    hasFeedback
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>Remember me</Checkbox>)}

                            <Button type="primary" htmlType="submit" className="login-form-button" block>
                                Войти
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </section>
        );

    }
}


const WrappedNormalLoginForm = Form.create({ name: 'auth' })(Auth);
export default WrappedNormalLoginForm;