import './feed.css';
import React from "react";
import pagesLogo from '../../Assets/pages_logo.png';
import { Layout, Row, Col, Avatar } from 'antd';
import Sample from '../../Assets/sample_avatar.jpg';
import { Content } from 'antd/es/layout/layout';

const Feed = () => {
    return(
        <Layout style={{backgroundColor: "#ffecd1"}}>

                <Row justify='center' align='center' className='header-main'>
                    <Col lg={12}>
                        <Row justify='center' align='middle' className='header'>
                            <img className="pages-logo" src={pagesLogo}/>
                            <p>Vineeth</p>
                        </Row>
                        <Row>
                            <Col className='main' lg={24}>
                                <p>Test</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>



        </Layout>
    )
}

export default Feed;