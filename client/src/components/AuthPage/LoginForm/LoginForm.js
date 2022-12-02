import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import "./LoginForm.css";
import { pageRoutes } from '../../../Routing/PageRoutes';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../Api-Interaction/Auth/AuthService';

const LoginForm = () => {
    const [ErrorMsg, setErrorMsg] = useState("");
    const [Msg, setMsg] = useState("");
    const navigate = useNavigate();
    const handleNavigation = (route) => {
        navigate(route);
    }
    const handleLogin = async (email, password) => {

        try {
            const response = await login(email, password);
            console.log(response);
            setMsg(response.data.message);
            if (response.status === 200) {
                handleNavigation(pageRoutes.home);
            }
        } catch (error) {
            if (!error?.response) {
                setErrorMsg("No Server Response");
                console.log(error);
            } else if (error.response?.status === 409) {
                setErrorMsg("Username Taken");
                console.log(error);
            } else {
                setErrorMsg("Login Failed");
                console.log(error);
            }
        }
    }
    const onFinish = (values) => {
        // e.preventDefault();
        handleLogin(values.email, values.password);
        console.log(values.email);
        console.log(values.password);
    };
    return (
        <div className='LoginForm-div1'>
            {ErrorMsg && <div><h1 style={{ color: "red" }}>{ErrorMsg}</h1></div>}
            {/* {Msg && <div><h1>{Msg}</h1></div>} */}
            <Form
                layout="vertical"
                name="login"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            // autoComplete="off"
            >
                <div className='LoginForm-div2'><h1 className='LoginForm-div2-h1'>Login Form</h1></div>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            type: 'email',
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 1,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 3,
                        span: 20,
                    }}
                >
                    <Button className='LoginForm-Btn' type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
                <div className='to-signup-div'>
                    <h4 className='to-signup-div-h4'>Don't have an account ?</h4>
                    <Button type="link" htmlType="button" onClick={() => handleNavigation(pageRoutes.signup)}>
                        Signup
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default LoginForm