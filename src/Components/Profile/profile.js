import './profile.css'
import React, { useState } from "react";
import { CaretRightOutlined, PlusOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Row, Col, Avatar, Button} from 'antd';
import Sample from '../../Assets/sample_avatar.jpg';
import addIcon from '../../Assets/plus.png';
import { Collapse, theme } from 'antd';


const Test = () => {
	return(
		<div className='test'>
			<h1>Your journals appear here</h1>
		</div>
	)
}

const getItems = (panelStyle) => [
  {
    key: '1',
    label: 'Journal',
    children: <Test/>,
    style: panelStyle,
  },
];


const BlankCollapse = () => {

	const getItems = (panelStyle) => [
		{
		  key: '1',
		  label: 'Journal',
		  children: <Test/>,
		  style: panelStyle,
		},
	];
	const { token } = theme.useToken();
	const panelStyle = {
		marginTop: 20,
		marginBottom: 20,
		background: token.colorFillAlter,
		borderRadius: token.borderRadiusLG,
		border: 'none',
	};

	return(
		<Collapse
			
			bordered={false}
			// defaultActiveKey={['1']}
			expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
			style={{
				background: token.colorBgContainer,
			}}
			items={getItems(panelStyle)}
		/>
	)
}




const Profile = () => {

	// const[added, setAdded] = useState(false);

	// const addCollapse = () => {
	// 	setAdded(true);
	// }

	const {Panel} = Collapse;

	const [collapseCount, setCollapseCount] = useState(0);

	const addCollapsePanel = () => {
		setCollapseCount(collapseCount + 1);
	};

	const { token } = theme.useToken();
	const panelStyle = {
		marginTop: 20,
		marginBottom: 20,
		background: token.colorFillAlter,
		borderRadius: token.borderRadiusLG,
		border: 'none',
	};

	return(
		<Layout>
			<Row align='middle' type='flex' gutter={[0,24]} className='profile-header-main'>
				<Col className='profile-avatar'>
					<div className='avatar-profile-main'>
						<Avatar className="avatar-profile" size={170} icon={<UserOutlined />} />
					</div>
				</Col>
			</Row>
			<Row align='middle' type='flex' gutter={[0,24]} className='journal-main'>
				<Col className='journal-list'>
					<Button 
						className="add-button" 
						shape='round'
						size='large' 
						icon={<PlusOutlined/>} 
						onClick={addCollapsePanel}
					>
						Add
					</Button>
					<Collapse
						className='collapse-main'
						bordered={false}
						// defaultActiveKey={['1']}
						expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0}/>}
						items={getItems(panelStyle)}
					/>
					<Collapse
					expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0}/>}
					>
					
						{[...Array(collapseCount)].map((_, index) => (
						<Panel
							className='added-collapse'
							bordered={false}
							header={`Journal ${index + 1}`} 
							key={index}
							style={{
								marginBottom: 20,
								borderRadius: token.borderRadiusLG,
							}}
							items={getItems(panelStyle)}
						>
							{/* Content for each collapse panel */}
							{/* You can add your custom content here */}
						</Panel>
						))}
					</Collapse>
				</Col>

			</Row>
			
		</Layout>
	)
};

export default Profile;