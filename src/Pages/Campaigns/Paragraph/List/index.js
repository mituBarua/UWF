import React, { useEffect, useState } from "react";

import { Collapse } from "antd";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { toast } from "react-toastify";

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  clearErrors,
  getCampaignByID,
  deleteCampaignParagraph,
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
      navigate(`/campaign/${id}`);
    } else if (error) {
      toast.error(error.message);
      dispatch(clearErrors());
    }
  }, [loading, error, success]);

  const handleDelete = (idx) => {
    dispatch(deleteCampaignParagraph(accessToken, idx));
  };

  const genExtra = (idx) => (
    <>
      <EditFilled onClick={() => navigate(`/campaign/paragraph/edit/${idx}`)} />
      <DeleteFilled onClick={() => handleDelete(idx)} />
    </>
  );

  if (loading) return <Spinner />;
  return (
    <>
      <Collapse expandIconPosition="start">
        {campaign?.paragraphs.map(({ title, body, index, id }) => (
          <Panel header={title} key={index} extra={genExtra(id)}>
            <div>{body}</div>
          </Panel>
        ))}
      </Collapse>
    </>
  );
};

export default ParagraphList;
