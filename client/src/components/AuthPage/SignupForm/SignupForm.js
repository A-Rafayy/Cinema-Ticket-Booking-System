import React, { useState, useEffect } from 'react';
import { Button, Form, Input, InputNumber, Select } from 'antd';
import "./SignupForm.css";
import { useNavigate } from 'react-router-dom';
import { pageRoutes } from '../../../Routing/PageRoutes';
import {signup} from "../../../Api-Interaction/Auth/AuthService";
const { Option } = Select;
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const SignupForm = () => {
    const [ErrorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();
    const handleNavigation = (route) => {
        navigate(route);
    }
    const handleSignup = (name, email, phone, password) => {

        try {
            const response = signup(name, email, phone, password);
            console.log(response);
        } catch (error) {
            if (!error?.response) {
                setErrorMsg("No Server Response");
                console.log(error);
            } else if (error.response?.status === 409) {
                setErrorMsg("Username Taken");
                console.log(error);
            } else {
                setErrorMsg("Registration Failed");
                console.log(error);
            }
        }
    }
    const onFinish = (values) => {
        // e.preventDefault();
        handleSignup(values.name, values.email, values.phone, values.password)
        console.log(values.name);
        console.log(values.email);
        console.log(values.phone);
        console.log(values.password);
    };
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select
            style={{
              width: 70,
            }}
          >
            <Option value="92">+92</Option>
            {/* <Option value="87">+87</Option> */}
          </Select>
        </Form.Item>
      );
    return (
        <div className='SignupForm-div1'>
            {ErrorMsg && <div>
                <h1 style={{color: "red"}}>{ ErrorMsg}</h1>
            </div>}
            <Form
                layout="vertical"
                name="signup"
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
                <div className='SignupForm-div2'><h1 className='SignupForm-div2-h1'>Signup Form</h1></div>
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        {
                            type: 'email',
                            required: true
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone number!',
                        },
                    ]}
                >
                    <Input
                        addonBefore={prefixSelector}
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 3,
                        span: 20,
                    }}
                >
                    <Button className='SignupForm-Btn' type="primary" htmlType="submit" onClick={() => { }}>
                        Signup
                    </Button>
                </Form.Item>
                <div className='to-login-div'>
                    <h4 className='to-login-div-h4'>Already have an account ?</h4>
                    <Button type="link" htmlType="button" onClick={() => handleNavigation(pageRoutes.login)}>
                        Login
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default SignupForm;