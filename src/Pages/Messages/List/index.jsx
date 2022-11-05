import React, { useEffect } from "react";

import { Table, Tag, Button, message } from "antd";

import {
  getMessageList,
  clearErrors,
  clearSuccess,
} from "../../../Actions/messageAction";
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
  const { messageList, error, success, loading } = useSelector(
    (state) => state.message
  );

  useEffect(() => {
    if (success && success.type == "message_delete_success") {
      toast.success("Message Deleted Successfully");
      dispatch(clearSuccess());
      navigate("/message/list");
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
      title: "First Name",
      dataIndex: "first_name",
      key: "first_name",
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      key: "last_name",
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at",
      render: (created_at) => {
        return created_at.slice(0, 10);
      },
    },
    {
      title: "Seen",
      dataIndex: "is_seen",
      key: "is_seen",
      render: (is_seen) => {
        let text = is_seen == "1" ? "Seen" : "Not Seen";
        let colors = {
          1: "green",
          0: "blue",
        };
        return (
          <Tag color={colors[is_seen]} key={is_seen}>
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
            <DatabaseFilled onClick={() => navigate(`/message/${id}`)} />
            {/* <EditFilled onClick={() => navigate(`/campaign/edit/${id}`)} />
            <DeleteFilled
              onClick={() => dispatch(deleteCampaign(accessToken, id))}
            /> */}
          </>
        );
      },
    },
  ];
  useEffect(() => {
    dispatch(getMessageList(accessToken));
  }, []);
  return (
    <>
      <div>
        <Table
          columns={columns}
          dataSource={messageList}
          loading={messageList == undefined}
          style={{ marginTop: 20 }}
        />
      </div>
    </>
  );
};

export default List;
