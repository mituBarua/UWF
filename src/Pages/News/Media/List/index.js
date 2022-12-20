import React, { useEffect } from "react";

import { Image, Card, Col, Row, Button } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { useParams, useNavigate } from "react-router-dom";

import nextId from "react-id-generator";

import {
  getNewsByID,
  deleteNewsMedia,
  clearErrors,
} from "../../../../Actions/newsAction";
import Spinner from "../../../../Components/Spinner";
import NoDataFound from "../../../../Components/NoDataFound";

const MediaList = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    user: { accessToken },
  } = useSelector((state) => state.user);

  const { loading, error, news, success } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(getNewsByID(accessToken, id));
  }, []);

  useEffect(() => {
    if (success && success.type == "news_delete_media_success") {
      toast.success("News Deleted Successfully");
      navigate(`/news/${success.modelId}`);
    } else if (error) {
      toast.error(error.message);
      dispatch(clearErrors());
    }
  }, [loading, error, success]);

  const handleDelete = (idx) => {
    dispatch(deleteNewsMedia(accessToken, idx, id));
  };

  if (loading) return <Spinner />;
  return (
    <div className="site-card-wrapper">
      {news?.media_list.length == 0 && <NoDataFound />}
      <Row gutter={16}>
        {news?.media_list.map(({ url, id, type }) => (
          <Col key={nextId()} span={8}>
            <Card style={{width:'300px',height:'250px'}} bordered={false}>
              {type == "Image" && <Image src={url} />}
              {type !== "Image" && (
                <>
                  <iframe src={url} height="250"  />
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
