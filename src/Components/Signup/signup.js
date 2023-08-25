import React from "react";
import { Button, Checkbox, Form, Input} from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import axios from "axios";

const onFinish = (values) => {
    console.log(values);
    axios.post("http://localhost:5000/signup", {
        username: values.username,
		password: values.password
    })
    .then(res => {
        if(res.data === "NotUnique") {
            alert('Username already taken');
        } else if(res.data === "Inserted") {
            console.log("User added");
            alert('User registered')
        }
    })
};


const Signup = () => {

    
    return(
        <div>
			<Form
			name="normal_login"
			className="login-form"
			initialValues={{
				remember: true,
			}}
			onFinish={onFinish}
			>
			<Form.Item
				name="username"
				rules={[
				{
					required: true,
					message: 'Please input your Username!',
				},
				]}
			>
				<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
			</Form.Item>
			<Form.Item
				name="password"
				rules={[
				{
					required: true,
					message: 'Please input your Password!',
				},
				]}
			>
				<Input
				prefix={<LockOutlined className="site-form-item-icon" />}
				type="password"
				placeholder="Password"
				/>
			</Form.Item>
            <Form.Item
				name="confirmPassword"
				rules={[
				{
					required: true,
					message: 'Please input your Password!',
				},
				]}
			>
				<Input
				prefix={<LockOutlined className="site-form-item-icon" />}
				type="password"
				placeholder="Confirm Password"
				/>
			</Form.Item>

			<Form.Item>
				<Button type="primary" htmlType="submit" className="login-form-button">
				Signup
				</Button>
			</Form.Item>
			</Form>
		</div>
    )
};

export default Signup;