import './feed.css'
import React from 'react';
import { Layout, Row, Col} from 'antd';
// import { AntDesignOutlined } from '@ant-design/icons';
import Sample from '../../Assets/sample_avatar.jpg';
import InstaxLogo from '../../Assets/instax_logo.png';
import { Avatar } from 'antd';


const {Content } = Layout;

// const headerStyle = {
// 	textAlign: 'center',
// 	color: '#fff',
// 	height: 64,
// 	paddingInline: 50,
// 	lineHeight: '64px',
// 	backgroundColor: '#7dbcea',
// };
// const contentStyle = {
// 	textAlign: 'center',
// 	minHeight: 120,
// 	lineHeight: '120px',
// 	color: '#fff',
// 	backgroundColor: '#108ee9',
// };
// const siderStyle = {
// 	textAlign: 'center',
// 	lineHeight: '120px',
// 	color: '#fff',
// 	backgroundColor: '#3ba0e9',
// };
// const footerStyle = {
// 	textAlign: 'center',
// 	color: '#fff',
// 	backgroundColor: '#7dbcea',
// };

const Feed = () => {
	return (
		<Layout>
			<Row align='middle' type='flex' gutter={[0,24]} className='header-main'>
				<Col className='header-text'
				xs={24}
				sm={24}
				md={12}
				lg={12}
				xl={12}
				>
					<div className='instax-logo-main'>
						<img className='instax-logo' src={InstaxLogo} />
					</div>
					<div className='instax-text'>
						<h2>InstaX</h2>
					</div>
				</Col>
				<Col className='avatar-main'
				xs={24}
				sm={24}
				md={12}
				lg={12}
				xl={12}
				>
					<div className='avatar-sample-main'>
						<Avatar className="avatar-sample" size={45} src={Sample} />
					</div>
				</Col>
			</Row>
			<Row align='middle' type='flex' gutter={[0,24]} className='content-main'>
				<Col className='feed-content'>
					<h1>Feed</h1>
				</Col>
			</Row>
			{/* <Content className='content-main'>
				<div className='feed-content'>
					<h1>Feed</h1>
				</div>
			</Content> */}
			{/* <Footer className='footer-main'>Footer</Footer> */}
		</Layout>
	)
};

export default Feed;