import React, { useEffect } from "react";

import { Table, Tag, Button } from "antd";

import {
  clearSuccess,
  clearErrors,
  getNewsList,
  deleteNews,
} from "../../../Actions/newsAction";
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
  const { newsList, error, success, loading } = useSelector(
    (state) => state.news
  );

  useEffect(() => {
    if (success && success.type == "news_delete_success") {
      toast.success("News Deleted Successfully");
      dispatch(clearSuccess());
      navigate("/news/list");
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
      title: "Verify",
      dataIndex: "is_verified",
      key: "is_verified",
      render: (isVerified) => {
        let text = isVerified == "1" ? "Verified" : "Unverified";
        let colors = {
          1: "green",
          0: "red",
        };
        return (
          <Tag color={colors[isVerified]} key={isVerified}>
            {text.toUpperCase()}
          </Tag>
        );
      },
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
            <DatabaseFilled onClick={() => navigate(`/news/${id}`)} />
            <EditFilled onClick={() => navigate(`/news/edit/${id}`)} />
            <DeleteFilled
              onClick={() => dispatch(deleteNews(accessToken, id))}
            />
          </>
        );
      },
    },
  ];
  useEffect(() => {
    dispatch(getNewsList(accessToken));
  }, []);
  return (
    <>
      <div>
        <Button type="primary" onClick={() => navigate("/news/create")}>
          Create
        </Button>
        <br />
        <Table
          columns={columns}
          dataSource={newsList}
          loading={newsList == undefined}
          style={{ marginTop: 20 }}
        />
      </div>
    </>
  );
};

export default List;
