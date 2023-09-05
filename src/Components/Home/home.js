import './home.css';
import React from 'react';
import { Layout, Row, Col, Tabs} from 'antd';
import Sample from '../../Assets/sample_avatar.jpg';
import pagesLogo from '../../Assets/pages_logo.png';
import { UserOutlined, BookOutlined} from '@ant-design/icons';
import { Navigate, useNavigate } from 'react-router-dom';
import Profile from '../Profile/profile';
import Feed from '../Feed/feed';


const onChange = (key) => {
	console.log(key);
};

const PagesLabel = () => {
	return(
		<div className='label-main'>
			<img className="pages-logo" src={pagesLogo}/>
		</div>
	)
}

const ProfileLabel = () => {
	return(
		<div className='label-main'>
			<UserOutlined/>
			<p>Profile</p>
		</div>
	)
}

const FeedLabel = () => {
	return(
		<div className='label-main'>
			<BookOutlined/>
			<p>Feed</p>
		</div>
	)
}

const items = [
	{
		key: '0',
		label: <PagesLabel/>,
		disabled: true,
	},
	{
		key: '1',
		label: <ProfileLabel/>,
		children: <Profile/>,
	},
	{
		key: '2',
		label: <FeedLabel/>,
		children: <Feed />,
	},
];

const Home = () => {

	return (
		<Layout>
			<Row align='middle' type='flex' gutter={[0,24]} className='header-main'>
				<Col className='side-tab-bar-main'>
					{/* <div className='pages-logo-main'>
						<img className='pages-logo' src={pagesLogo}/>
					</div> */}
					<Tabs
					className='side-tab-bar'
					tabPosition='left'
					defaultActiveKey="1" 
					items={items} 
					onChange={onChange} 
					/>
				</Col>
			</Row>
		</Layout>
	)
};

export default Home;