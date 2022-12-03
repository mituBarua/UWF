import React, { useEffect } from "react";

import { Tag, Button } from "antd";
import { Table } from "ant-table-extensions";

import {
  clearSuccess,
  clearErrors,
  deleteProject,
  getProjectList,
} from "../../../Actions/projectAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { EditFilled, DeleteFilled, DatabaseFilled } from "@ant-design/icons";

const List = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    user: { accessToken },
  } = useSelector((state) => state.user);
  const { projectList, error, success, loading } = useSelector(
    (state) => state.project
  );

  useEffect(() => {
    if (success && success.type == "project_delete_success") {
      toast.success("Project Deleted Successfully");
      dispatch(clearSuccess());
      navigate("/project/list");
      window.location.reload();
    } else if (error) {
      toast.error(error.message);
      dispatch(clearErrors());
    }
  }, [loading, error, success]);

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
      width:'20%',
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width:'20%',
      render:(des)=>des.slice(0,50)
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
          <>
            <DatabaseFilled onClick={() => navigate(`/project/${id}`)} />
            <EditFilled onClick={() => navigate(`/project/edit/${id}`)} />
            <DeleteFilled
              onClick={() => dispatch(deleteProject(accessToken, id))}
            />
          </>
        );
      },
    },
    {
      title: "Verified",
      dataIndex: "is_verified",
      key: "is_verified",
      render: (isVerified) => {
        let text = isVerified == "1" ? "Verified" : "Unverified";
        let colors = {
          1: "green",
          2: "yellow",
        };
        return (
          <Tag color={colors[isVerified]} key={isVerified}>
            {text.toUpperCase()}
          </Tag>
        );
      },
    },
  ];
  useEffect(() => {
    dispatch(getProjectList(accessToken));
  }, []);
  return (
    <>
      <div>
        <Button type="primary" onClick={() => navigate("/project/create")}>
          Create
        </Button>
        <br />
        <br />
        <Table
          columns={columns}
          dataSource={projectList}
          loading={projectList == undefined}
          style={{ marginTop: 20 }}
          searchable
        />
      </div>
    </>
  );
};

export default List;
