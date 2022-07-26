import React, { useEffect } from "react";

import { Table, Tag, Button } from "antd";

import { getProjectList } from "../../../Actions/projectAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const List = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Start Date",
      dataIndex: "start_date",
      key: "start_date",
    },
    {
      title: "End Date",
      dataIndex: "end_date",
      key: "end_date",
    },
    {
      title: "Active",
      dataIndex: "is_active",
      key: "is_active",
      render: (isActive) => {
        let text = isActive == "1" ? "Active" : "Inactive";
        let colors = {
          1: "green",
          2: "yellow",
        };
        return (
          <Tag color={colors[isActive]} key={isActive}>
            {text.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      render: (row) => {
        const { id } = row;
        return (
          <Button type="primary" onClick={() => navigate("/user/list")}>
            Details
          </Button>
        );
      },
    },
  ];

  const {
    user: { accessToken },
  } = useSelector((state) => state.user);
  const { projectList } = useSelector((state) => state.project);
  useEffect(() => {
    dispatch(getProjectList(accessToken));
  }, []);
  return <Table columns={columns} dataSource={projectList} />;
};

export default List;
