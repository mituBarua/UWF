
import React from 'react';
import './style.css';
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import { Link } from "react-router-dom";
const { Header, Content, Footer } = Layout;


const LandingPage = () => (
  <Layout>
    <Header style={{ position: 'fixed', width: '100%' }}>

      <Row>
        <Col span={6}><h2 className="unity-logo">Unity Welfare Fund</h2></Col>

        <Col span={18}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px', justifyContent: 'right' }}
          >
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Appeals</Menu.Item>
            <Menu.Item key="3">Projects</Menu.Item>
            <Menu.Item key="4">Campaigns</Menu.Item>
            <Menu.Item key="5">News</Menu.Item>
            <Menu.Item key="6">Galleries</Menu.Item>
            <Menu.Item key="7"><Link to="/login" /> Login</Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header>

  </Layout>
);

export default LandingPage;