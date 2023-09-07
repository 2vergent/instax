import './profile.css'
import React, { useState } from "react";
import { CaretRightOutlined, PlusOutlined, UserOutlined, SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Layout, Row, Col, Avatar, Button, Modal, Input, Card} from 'antd';
import Sample from '../../Assets/sample_avatar.jpg';
import addIcon from '../../Assets/plus.png';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { userName, userID } from '../../Store/store';

const { Meta } = Card;
const {TextArea} = Input;


const Profile = () => {

	const [user_name] = useRecoilState(userName);

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [journalText, setJournalText] = useState();

	const showModal = () => {
		setIsModalOpen(true);
	};
	const handleOk = async () => {

		await axios.get("http://localhost:5000/post", {params: {username: user_name}})
		.then(res => {
			axios.post("http://localhost:5000/post",  {
				id: res.data,
				value: journalText,
			})
			.then(res => {
				if (res.data === "Inserted") {
					console.log("Written");
				}
			})
		})
		setIsModalOpen(false);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const gridStyle = {
		width: '25%',
		textAlign: 'center',
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
						onClick={showModal}
					>
						Add
					</Button>
					<Modal title="New Journal Entry" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
						<TextArea rows={4} onChange={(e) => setJournalText(e.target.value)}/>
					</Modal>
					<Card title="Journal">
						<Card.Grid style={gridStyle}>Journal</Card.Grid>
						<Card.Grid style={gridStyle}>Journal</Card.Grid>
						<Card.Grid style={gridStyle}>Journal</Card.Grid>
						<Card.Grid style={gridStyle}>Journal</Card.Grid>
						<Card.Grid style={gridStyle}>Journal</Card.Grid>
						<Card.Grid style={gridStyle}>Journal</Card.Grid>
						<Card.Grid style={gridStyle}>Journal</Card.Grid>
						<Card.Grid style={gridStyle}>Journal</Card.Grid>
					</Card>
				</Col>

			</Row>
			
		</Layout>
	)
};

export default Profile;