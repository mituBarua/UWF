import React, { useState, useEffect } from "react";

import { Tag } from "antd";
import { Table } from "ant-table-extensions";

import {
  getMessageList,
  clearErrors,
  clearSuccess,
} from "../../../Actions/messageAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { DatabaseFilled } from "@ant-design/icons";
import ModalView from "../View/index2";

const List = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    user: { accessToken },
  } = useSelector((state) => state.user);
  const { messageList, error, success, loading } = useSelector(
    (state) => state.message
  );

  const [isModalOpen, setIsModalOpen] = useState({
    id: null,
    isOpen: false,
  });

  const handleCancel = () => {
    setIsModalOpen({
      id: null,
      isOpen: false,
    });
  };

  useEffect(() => {
    if (error) {
      toast.error(error.message);
      dispatch(clearErrors());
    }
  }, [loading, error]);

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
            <DatabaseFilled
              onClick={() => {
                return setIsModalOpen({
                  id,
                  isOpen: true,
                });
              }}
            />
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
        {isModalOpen.isOpen && (
          <ModalView {...isModalOpen} handleCancel={handleCancel} />
        )}

        <Table
          columns={columns}
          dataSource={messageList}
          loading={messageList == undefined}
          style={{ marginTop: 20 }}
          searchable={true}
        />
      </div>
    </>
  );
};

export default List;
