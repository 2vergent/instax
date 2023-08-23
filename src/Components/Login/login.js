import React from "react";
import { Button, Checkbox, Form, Input, Tabs } from 'antd';
import './login.css'
import { useState } from "react";


const signupSection = () => {

	const layout = {
		labelCol: {
			span: 8,
		},
		wrapperCol: {
			span: 16,
		},
	};

	const validateMessages = {
		required: '${label} is required!',
		types: {
			email: '${label} is not a valid email!',
			number: '${label} is not a valid number!',
		},
		number: {
			range: '${label} must be between ${min} and ${max}',
		},
	};

	const onFinish = (values) => {
		console.log(values);
		};

	return(

		<Form
		{...layout}
		name="nest-messages"
		onFinish={onFinish}
		style={{
		maxWidth: 600,
		}}
		validateMessages={validateMessages}
		>
			<Form.Item
			name={['user', 'name']}
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
			name={['user', 'email']}
			label="Email"
			rules={[
				{
				type: 'email',
				},
			]}
			>
			<Input />
			</Form.Item>
			<Form.Item
			name={['user', 'age']}
			label="Age"
			rules={[
				{
				type: 'number',
				min: 0,
				max: 99,
				},
			]}
			>
			{/* <InputNumber /> */}
			</Form.Item>
			<Form.Item name={['user', 'website']} label="Website">
			<Input />
			</Form.Item>
			<Form.Item name={['user', 'introduction']} label="Introduction">
			<Input.TextArea />
			</Form.Item>
			<Form.Item
			wrapperCol={{
				...layout.wrapperCol,
				offset: 8,
			}}
			>
			<Button type="primary" htmlType="submit">
				Submit
			</Button>
			</Form.Item>
		</Form>
	)

	
};

const onChange = (key) => {
	console.log(key);
};

const LoginSection = () => {


	const onFinish = (values) => {
		console.log('Success:', values);
	};
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	return(
		<div>
			<Form
			name="basic"
			labelCol={{
			span: 8,
			}}
			wrapperCol={{
			span: 16,
			}}
			style={{
			maxWidth: 600,
			}}
			initialValues={{
			remember: true,
			}}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
			>
				<Form.Item
				label="Username"
				name="username"
				rules={[
					{
					required: true,
					message: 'Please input your username!',
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
					offset: 8,
					span: 16,
				}}
				>
				<Checkbox>Remember me</Checkbox>
				</Form.Item>

				<Form.Item
				wrapperCol={{
					offset: 8,
					span: 16,
				}}
				>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
				</Form.Item>
			</Form>
		</div>
	)
};

const items = [
	{
		key: '1',
		label: 'Login',
		children: LoginSection(),
	},
	{
		key: '2',
		label: 'Signup',
		children: signupSection(),
	}
];


const Login = () => {

	
	return(
		<Tabs defaultActiveKey="1" items={items} onChange={onChange} />
	)
};

export default Login;