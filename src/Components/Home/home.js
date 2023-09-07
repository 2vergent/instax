import './home.css';
import React, { useState } from 'react';
import { Layout, Menu, theme} from 'antd';
import Sample from '../../Assets/sample_avatar.jpg';
import pagesLogo from '../../Assets/pages_logo.png';
import { UserOutlined, BookOutlined} from '@ant-design/icons';
import { Navigate, useNavigate } from 'react-router-dom';
import { UploadOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Profile from '../Profile/profile';
import Feed from '../Feed/feed';


const { Header, Content, Sider } = Layout;

const items = [
	{
		icon: <UserOutlined/>,
		key: '1',
		label: 'Profile',
	},
	{
		icon: <BookOutlined/>,
		key: '2',
		label: 'Feed',
	},
];

const Home = () => {

	const {
		token: { colorBgContainer },
	} = theme.useToken();

	const [menuState, setMenuState] = useState("profile");

	return (
		
		<Layout style={{ minHeight: "100vh"}}>
			<Sider
			breakpoint="lg"
			collapsedWidth="0"
			onBreakpoint={(broken) => {
				console.log(broken);
			}}
			onCollapse={(collapsed, type) => {
				console.log(collapsed, type);
			}}
			>
				<div className="menu-logo">
					<img className="pages-logo" src={pagesLogo}/>
					<p className='pages-text'>Pages</p>
				</div>
				<Menu
					theme="dark"
					mode="inline"
					defaultSelectedKeys={['1']}
					items={items}
					onClick={
						(key) => {
							if (key.key == 2) {
								setMenuState("feed");
							} else if (key.key == 1) {
								setMenuState("profile");
							}
						}
					}	
				/>
			</Sider>
			<Layout>
				<Header
					style={{
					padding: 0,
					background: "#1010101",
					}}
				/>
				<Content
					style={{
					margin: 0,
					}}
				>
					<div
					style={{
						padding: 0,
						minHeight: 0,
						background: "#1010101",
					}}
					>
					{(menuState === "profile") ? <Profile/> : <Feed/> }
					</div>
				</Content>
			</Layout>
	</Layout>
	)
};

export default Home;