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

// const onChange = (key) => {
// 	console.log(key);
// };

// const ProfileLabel = () => {
// 	return(
// 		<div className='label-main'>
// 			<UserOutlined/>
// 			<p>Profile</p>
// 		</div>
// 	)
// }

// const FeedLabel = () => {
// 	return(
// 		<div className='label-main'>
// 			<BookOutlined/>
// 			<p>Feed</p>
// 		</div>
// 	)
// }

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
		// <Layout>
		// 	<Row align='middle' type='flex' gutter={[0,24]} className='header-main'>
		// 		<Col className='side-tab-bar-main'>
		// 			{/* <div className='pages-logo-main'>
		// 				<img className='pages-logo' src={pagesLogo}/>
		// 			</div> */}
		// 			<Tabs
		// 			className='side-tab-bar'
		// 			tabPosition='left'
		// 			defaultActiveKey="1" 
		// 			items={items} 
		// 			onChange={onChange} 
		// 			/>
		// 		</Col>
		// 	</Row>
		// </Layout>
		

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
								console.log(menuState, key.key);
							} else if (key.key == 1) {
								setMenuState("profile");
								console.log(menuState, key.key);
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