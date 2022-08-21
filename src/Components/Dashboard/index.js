import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  FileOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
const { Header, Sider, Content } = Layout;

const menuItems = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: "Dashboard",
    ref: "/dashboard",
  },
  {
    key: "2",
    icon: <UserOutlined />,
    label: "Users",
    ref: "/user/list",
  },
  {
    key: "3",
    icon: <UserOutlined />,
    label: "Projects",
    ref: "/project/list",
  },
  {
    key: "4",
    icon: <UploadOutlined />,
    label: "Appeal",
    ref: "/appeal/list",
  },
  {
    key: "5",
    icon: <UploadOutlined />,
    label: "News",
    ref: "/news/list",
  },
  {
    key: "6",
    icon: <UserOutlined />,
    label: "Campaigns",
    ref: "/campaign/list",
  },
  //   {
  //     key: "2",
  //     icon: <FileOutlined />,
  //     label: "Projects",
  //   },
  //   {
  //     key: "3",
  //     icon: <UploadOutlined />,
  //     label: "Campaign",
  //   },
  //
];

const Dashboard = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          {menuItems.map(({ key, icon, label, ref }) => (
            <Menu.Item key={key} icon={icon}>
              <Link to={ref} />
              {label}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="header-menu">
            <a href="#">Role Name</a>
            <a href="#">Logout</a>
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            height: "100%",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
