import React, { useState, useEffect } from "react";

import { Image, Card, Col, Row, Button } from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { useParams, useNavigate } from "react-router-dom";

import {
  getAppealByID,
  deleteAppealMedia,
  clearErrors,
} from "../../../../Actions/appealAction";
import Spinner from "../../../../Components/Spinner";

const MediaList = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    user: { accessToken },
  } = useSelector((state) => state.user);

  const { loading, error, appeal, success } = useSelector(
    (state) => state.appeal
  );

  useEffect(() => {
    dispatch(getAppealByID(accessToken, id));
  }, []);

  useEffect(() => {
    if (success && success.type == "appeal_delete_media_success") {
      toast.success("Appeal Deleted Successfully");
      navigate(`/appeal/${success.modelId}`);
    } else if (error) {
      toast.error(error.message);
      dispatch(clearErrors());
    }
  }, [loading, error, success]);

  const handleDelete = (idx) => {
    dispatch(deleteAppealMedia(accessToken, idx, id));
  };

  if (loading) return <Spinner />;
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        {appeal?.media_list.map(({ url, id, type }) => (
          <Col span={8}>
            <Card title={`Media ${id} ${type}`} bordered={false}>
              {type == "Image" && <Image width={200} height={300} src={url} />}
              {type != "Image" && (
                <>
                  <iframe src={url} width="200" height="300" />
                  <a href={url} target="_blank">
                    Read more
                  </a>
                </>
              )}
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
