import React, { useEffect } from "react";

import { Tag } from "antd";
import { Table } from "ant-table-extensions";

import {
  getDonationList,
  clearErrors,
  clearSuccess,
} from "../../../Actions/donationAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { DatabaseFilled } from "@ant-design/icons";

const List = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    user: { accessToken },
  } = useSelector((state) => state.user);
  const { donationList, error, success, loading } = useSelector(
    (state) => state.donation
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
      title: "Donation ID",
      dataIndex: "just_giving_donation_id",
      key: "just_giving_donation_id",
    },
    {
      title: "Date",
      dataIndex: "created_at",
      key: "created_at",
      render: (created_at) => {
        return created_at.slice(0, 10);
      },
    },
    {
      title: "Refer",
      dataIndex: "payment_ref",
      key: "payment_ref",
    },
    {
      title: "Monthly",
      dataIndex: "is_monthly",
      key: "is_monthly",
      render: (isMonthly) => {
        let text = isMonthly == "1" ? "Yes" : "No";
        let colors = {
          1: "green",
          0: "red",
        };
        return (
          <Tag color={colors[isMonthly]} key={isMonthly}>
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
            <DatabaseFilled onClick={() => navigate(`/donation/${id}`)} />
          </>
        );
      },
    },
  ];
  useEffect(() => {
    dispatch(getDonationList(accessToken));
  }, []);
  return (
    <>
      <div>
        <Table
          columns={columns}
          dataSource={donationList}
          loading={donationList == undefined}
          style={{ marginTop: 20 }}
          searchable
        />
      </div>
    </>
  );
};

export default List;
