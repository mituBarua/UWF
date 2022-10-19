import React, { useState, useEffect } from "react";

import { Image, Card, Col, Row, Button } from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { useParams, useNavigate } from "react-router-dom";

import {
  getCampaignByID,
  deleteCampaignMedia,
  clearErrors,
} from "../../../../Actions/campaignAction";
import Spinner from "../../../../Components/Spinner";

const MediaList = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    user: { accessToken },
  } = useSelector((state) => state.user);

  const { loading, error, campaign, success } = useSelector(
    (state) => state.campaign
  );

  useEffect(() => {
    dispatch(getCampaignByID(accessToken, id));
  }, []);

  useEffect(() => {
    if (success && success.type == "campaign_delete_media_success") {
      toast.success("Campaign Deleted Successfully");
      navigate("/campaign/list");
    } else if (error) {
      toast.error(error.message);
      dispatch(clearErrors());
    }
  }, [loading, error, success]);

  const handleDelete = (id) => {
    dispatch(deleteCampaignMedia(accessToken, id));
  };

  if (loading) return <Spinner />;
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        {campaign?.media_list.map(({ url, id }) => (
          <Col span={8}>
            <Card title={`Media ${id}`} bordered={false}>
              <Image width={200} src={url} />
            </Card>
            <br />
            <Button type="danger" block onClick={() => handleDelete(id)}>
              Delete
            </Button>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MediaList;
