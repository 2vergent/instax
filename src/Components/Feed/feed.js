import './feed.css';
import React from "react";
import pagesLogo from '../../Assets/pages_logo.png';
import { Layout, Row, Col, Avatar } from 'antd';
import Sample from '../../Assets/sample_avatar.jpg';

const Feed = () => {
    return(
        <Layout>
            <Row justify='center' align='middle' className='header-main'>
                <Col>
                    <Row justify='center' align='middle'>
                        <img className="pages-logo" src={pagesLogo}/>
                        <p className='pages-text'>Pages</p>
                    </Row>
                </Col>
            </Row>
            <Row className='post-main'>
                <Col className='post-header' lg={24}>
                    <Row justify='center' align='middle'>
                        <img className="post-author" src={Sample}/>
                        <p>Vineeth</p>
                    </Row>
                </Col>
                <Row>
                    <h1>Post template</h1>
                </Row>
            </Row>
        </Layout>
    )
}

export default Feed;