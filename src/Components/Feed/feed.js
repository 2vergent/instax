import './feed.css';
import React from "react";
import pagesLogo from '../../Assets/pages_logo.png';
import { Layout, Row, Col, Avatar } from 'antd';
import Sample from '../../Assets/sample_avatar.jpg';
import { Content } from 'antd/es/layout/layout';

const Feed = () => {
    return(
        <Layout style={{backgroundColor: "#ffecd1"}}>
            {/* <Row justify='center' align='middle' className='header-main'>
                <Col>
                    <Row justify='center' align='middle'>
                        <img className="pages-logo" src={pagesLogo}/>
                        <p className='pages-text'>Pages</p>
                    </Row>
                </Col>
            </Row>
            <Row justify='center' align='middle' className='post-main'>
                <Col className='post-header'>
                    <Row justify='center' align='middle'>
                        <img className="post-author" src={Sample}/>
                        <p>Vineeth</p>
                    </Row>
                </Col>
                <Col className='post-body-main'>
                    <Row>
                        <h1>Post template</h1>
                    </Row>
                </Col>
            </Row> */}

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