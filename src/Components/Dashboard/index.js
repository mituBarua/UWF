import {
  DashboardOutlined,
  ProjectOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  PoundCircleOutlined,
  MessageOutlined,
  TeamOutlined,
  DatabaseOutlined,
  GiftOutlined,
  SecurityScanOutlined,
  CaretDownOutlined
} from "@ant-design/icons";
import { Menu, Dropdown, Icon, Layout } from "antd";
import { DownOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { logoutUser } from "../../Actions/userAction";
import "./style.css";
const { Header, Sider, Content } = Layout;

const menuItems = [
  {
    key: "1",
    icon: <DashboardOutlined />,
    label: "Dashboard",
    ref: "/dashboard",
  },
  {
    key: "2",
    icon: <UserOutlined />,
    label: "User",
    ref: "/user/list",
  },
  {
    key: "3",
    icon: <ProjectOutlined />,
    label: "Project",
    ref: "/project/list",
  },
  {
    key: "4",
    icon: <SecurityScanOutlined />,
    label: "Appeal",
    ref: "/appeal/list",
  },
  {
    key: "5",
    icon: <DatabaseOutlined />,
    label: "News",
    ref: "/news/list",
  },
  {
    key: "6",
    icon: <GiftOutlined />,
    label: "Campaign",
    ref: "/campaign/list",
  },
  {
    key: "7",
    icon: <TeamOutlined />,
    label: "Volunteer",
    ref: "/volunteer/list",
  },
  {
    key: "8",
    icon: <MessageOutlined />,
    label: "Message",
    ref: "/message/list",
  },
  {
    key: "9",
    icon: <PoundCircleOutlined />,
    label: "Donation",
    ref: "/donation/list",
  },
];

const Dashboard = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    user: {
      dashboard: {
        profile: { role, name, last_name, email },
      },
    },
  } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();

  const selectedMenuItem = menuItems.filter(
    ({ label }) => location.pathname.search(label.toLowerCase()) > 0
  );

  const dropdownMenu = (
    <Menu>
      <Menu.Item key="0">
        <a onClick={(e) => navigate("/profile")}>Profile</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a onClick={(e) => dispatch(logoutUser())}>Logout</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[
            selectedMenuItem.length > 0 ? selectedMenuItem[0].key : "1",
          ]}
        >
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
            <a href="#">{role}</a>
       
            <Dropdown overlay={dropdownMenu} trigger={["click"]}>
              <a className="ant-dropdown-link" href="#">
              {email}  <CaretDownOutlined />
              </a>
            </Dropdown>
          </div>
        </Header>
        <Content
          className="content-bg"
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
