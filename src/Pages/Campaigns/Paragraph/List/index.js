import React, { useEffect, useState } from "react";

import { Collapse } from "antd";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { toast } from "react-toastify";

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  clearErrors,
  getCampaignByID,
} from "../../../../Actions/campaignAction";
import "../../Create/style.css";

import Spinner from "../../../../Components/Spinner";

const { Panel } = Collapse;

const ParagraphList = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    user: { accessToken },
  } = useSelector((state) => state.user);
  const { campaign, loading, error, success } = useSelector(
    (state) => state.campaign
  );

  useEffect(() => {
    dispatch(getCampaignByID(accessToken, id));
  }, []);

  useEffect(() => {
    if (success && success.type == "campaign_paragraph_delete_success") {
      toast.success("Campaign Paragraph Deleted");
      navigate("/campaign/list");
    } else if (error) {
      toast.error(error.message);
      dispatch(clearErrors());
    }
  }, [loading, error, success]);

  const genExtra = () => (
    <>
      <EditFilled
        onClick={(event) => {
          event.stopPropagation();
        }}
      />
      <DeleteFilled
        onClick={(event) => {
          event.stopPropagation();
        }}
      />
    </>
  );

  if (loading) return <Spinner />;
  return (
    <>
      <Collapse expandIconPosition="start">
        {campaign?.paragraphs.map(({ title, body, index }) => (
          <Panel header={title} key={index} extra={genExtra()}>
            <div>{body}</div>
          </Panel>
        ))}
      </Collapse>
    </>
  );
};

export default ParagraphList;
