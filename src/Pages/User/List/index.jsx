import React, { useEffect } from "react";

import { Tag, Button } from "antd";
import { Table } from "ant-table-extensions";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { EditFilled, DeleteFilled } from "@ant-design/icons";
import {
  deleteUser,
  clearErrors,
  clearSuccess,
} from "../../../Actions/userAction";

const List = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    user: {
      accessToken,
      dashboard: { userList },
    },
    success,
    loading,
    error,
  } = useSelector((state) => state.user);

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
    {
      title: "Action",
      render: (row) => {
        const { id } = row;
        return (
          <>
            <EditFilled onClick={() => navigate(`/user/edit/${id}`)} />
            <DeleteFilled
              onClick={() => dispatch(deleteUser(accessToken, id))}
            />
          </>
        );
      },
    },
  ];

  useEffect(() => {
    if (success && success.type == "user_delete_success") {
      toast.success("User Deleted Successfully");
      dispatch(clearSuccess());
      navigate("/user/list");
      window.location.reload();
    } else if (error) {
      toast.error(error.message);
      dispatch(clearErrors());
    }
  }, [loading, error, success]);

  return (
    <div style={{ width: "90%" }}>
      <Button type="primary" onClick={() => navigate("/user/create")}>
        Create
      </Button>
      <br />
      <br />
      <Table
        columns={columns}
        dataSource={userList}
        loading={userList == undefined}
        searchable
        scroll={{
          x: window.innerWidth < 1350 ? window.innerWidth : 0,
        }}
      />
      ;
    </div>
  );
};

export default List;
