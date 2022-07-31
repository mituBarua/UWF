import React, { useEffect } from "react";

import { Table, Tag, Button } from "antd";

import {
  getCampaignList,
  deleteCampaign,
  clearErrors,
  clearSuccess,
} from "../../../Actions/campaignAction";
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
  const { campaignList, error, success, loading } = useSelector(
    (state) => state.campaign
  );

  useEffect(() => {
    if (success && success.type == "campaign_delete_success") {
      toast.success("Campaign Deleted Successfully");
      dispatch(clearSuccess());
      navigate("/campaign/list");
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
            <DatabaseFilled onClick={() => navigate(`/campaign/${id}`)} />
            <EditFilled onClick={() => navigate(`/campaign/edit/${id}`)} />
            <DeleteFilled
              onClick={() => dispatch(deleteCampaign(accessToken, id))}
            />
          </>
        );
      },
    },
  ];
  useEffect(() => {
    dispatch(getCampaignList(accessToken));
  }, []);
  return (
    <>
      <div>
        <Button type="primary" onClick={() => navigate("/campaign/create")}>
          Create
        </Button>
        <br />
        <Table
          columns={columns}
          dataSource={campaignList}
          style={{ marginTop: 20 }}
        />
      </div>
    </>
  );
};

export default List;
