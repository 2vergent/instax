import './login.css'
import React from "react";
import axios from "axios";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input} from 'antd';
import { useNavigate } from "react-router-dom";
import instaxLogo from "../../Assets/instax_logo.png"


const Login = () => {

	const navigate = useNavigate();

	const onFinish = (values) => {
		axios.post("http://localhost:5000/login",  {
			username: values.username,
			password: values.password
		})
		.then(res => {
			if (res.data === "exists") {
				navigate("/feed");
			} else if (res.data === "no exists") {
				alert("User not registered")
			}
		})
		

	};

	return(
		<div className='login-screen'>
			<div className='logoNlogin'>
				<div className='logo-space'>
					<img className="instaxLogo" src={instaxLogo}/>
				</div>
				<Divider 
				type='vertical' 
				className='center-divide'
				/>
				<div className='login-main'>
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

					<Form.Item>
						<Button type="primary" htmlType="submit" className="login-form-button">
						Log in
						</Button>
						<div className='register-text'>
							Or <a className="actual-register" href="/signup">Register now!</a>
						</div>
					</Form.Item>
					</Form>
				</div>
			</div>
		</div>
	)
};

export default Login;