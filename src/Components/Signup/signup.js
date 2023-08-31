import './signup.css'
import React from "react";
import { Button, Form, Input, Divider} from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import axios from "axios";
import instaxLogo from "../../Assets/instax_logo.png";
import pagesLogo from "../../Assets/pages_logo.png";

const onFinish = (values) => {
    console.log(values);
    axios.post("http://localhost:5000/signup", {
		name: values.name,
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
        <div className='signup-screen'>
			<div className='logoNsignup'>
				<div className='logo-login-space'>
					<img className="instaxLogoSignup" src={pagesLogo}/>
				</div>
				<Divider 
				type='vertical' 
				className='center-divide-signup'
				/>
				<div className='signup-main'>
					<Form
					name="normal_login"
					className="signup-form"
					initialValues={{
						remember: true,
					}}
					onFinish={onFinish}
					>
					<Form.Item
					name="name"
					rules={[
					{
						required: true,
						message: 'Please input your Full name!',
					},
					]}
					>
						<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name" />
					</Form.Item>
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
						<Button type="primary" htmlType="submit" className="signup-form-button">
						Sign Up
						</Button>
					</Form.Item>
					</Form>
				</div>
			</div>
		</div>
    )
};

export default Signup;