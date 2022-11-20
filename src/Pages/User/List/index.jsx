import React from "react";

import { Tag } from "antd";
import { Table } from "ant-table-extensions";

import { useSelector } from "react-redux";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "First Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Last Name",
    dataIndex: "last_name",
    key: "last_name",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
    render: (role) => {
      let text =
        role == "SuperAdmin"
          ? "Super Admin"
          : role == "RegisteredUser"
          ? "Registered User"
          : role;
      let colors = {
        SuperAdmin: "red",
        Admin: "blue",
        Manager: "green",
        RegisteredUser: "yellow",
      };
      return (
        <Tag color={colors[role]} key={role}>
          {text.toUpperCase()}
        </Tag>
      );
    },
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
];

const UserList = () => {
  const {
    user: {
      dashboard: { userList },
    },
  } = useSelector((state) => state.user);
  return <Table columns={columns} dataSource={userList} searchable />;
};

export default UserList;
