import React, { useEffect } from "react";

import { Tag, Button } from "antd";
import { Table } from "ant-table-extensions";

import {
  clearSuccess,
  clearErrors,
  appealProject,
  getAppealList,
  deleteAppeal,
} from "../../../Actions/appealAction";
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
  const { appealList, error, success, loading } = useSelector(
    (state) => state.appeal
  );

  useEffect(() => {
    if (success && success.type == "appeal_delete_success") {
      toast.success("Appeal Deleted Successfully");
      dispatch(clearSuccess());
      navigate("/appeal/list");
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
          <>
            <DatabaseFilled onClick={() => navigate(`/appeal/${id}`)} />
            <EditFilled onClick={() => navigate(`/appeal/edit/${id}`)} />
            <DeleteFilled
              onClick={() => dispatch(deleteAppeal(accessToken, id))}
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
    dispatch(getAppealList(accessToken));
  }, []);
  return (
    <>
      <div>
        <Button type="primary" onClick={() => navigate("/appeal/create")}>
          Create
        </Button>
        <br />
        <br />
        <Table
          columns={columns}
          dataSource={appealList}
          loading={appealList == undefined}
          style={{ marginTop: 20 }}
          searchable
        />
      </div>
    </>
  );
};

export default List;
