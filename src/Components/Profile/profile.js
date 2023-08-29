import './profile.css'
import React from "react";
import { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Layout, Row, Col} from 'antd';
import Sample from '../../Assets/sample_avatar.jpg';
import InstaxLogo from '../../Assets/instax_logo.png';
import { Avatar, Menu } from 'antd';

function getItem(label, key, icon, children, type) {
	return {
		key,
		icon,
		children,
		label,
		type,
	};
}
const items = [
	getItem('Journal One', 'sub1', <MailOutlined />, [
		getItem('Option 1', '1'),
		getItem('Option 2', '2'),
		getItem('Option 3', '3'),
		getItem('Option 4', '4'),
	]),
	getItem('Journal Two', 'sub2', <AppstoreOutlined />, [
		getItem('Option 5', '5'),
		getItem('Option 6', '6'),
		getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
	]),
	getItem('Journal Three', 'sub4', <SettingOutlined />, [
		getItem('Option 9', '9'),
		getItem('Option 10', '10'),
		getItem('Option 11', '11'),
		getItem('Option 12', '12'),
	]),
];

const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const Profile = () => {

	const [openKeys, setOpenKeys] = useState(['sub1']);
	const onOpenChange = (keys) => {
		const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
		if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
			setOpenKeys(keys);
		} else {
			setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
		}
	};

	return(
		<Layout>
			<Row align='middle' type='flex' gutter={[0,24]} className='profile-header-main'>
				<Col className='profile-avatar'>
					<div className='avatar-profile-main'>
						<Avatar className="avatar-profile" size={170} src={Sample} />
					</div>
				</Col>
			</Row>
			<Row align='middle' type='flex' gutter={[0,24]} className='journal-main'>
			<Menu
				className='journal-menu'
				mode="inline"
				openKeys={openKeys}
				onOpenChange={onOpenChange}
				items={items}
			/>
			</Row>
		</Layout>
	)
};

export default Profile;