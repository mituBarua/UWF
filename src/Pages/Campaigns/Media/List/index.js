import React, { useEffect } from "react";

import { Image, Card, Col, Row, Button } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { useParams, useNavigate } from "react-router-dom";

import NoDataFound from "../../../../Components/NoDataFound";

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
      navigate(`/campaign/${success.modelId}`);
    } else if (error) {
      toast.error(error.message);
      dispatch(clearErrors());
      window.location.reload();
    }
  }, [loading, error, success]);

  const handleDelete = (idx) => {
    if (window.confirm("Are you sure you want to delete?")) {
      dispatch(deleteCampaignMedia(accessToken, idx, id));
    }
   
  };

  if (loading) return <Spinner />;
  return (
    <div className="site-card-wrapper">
      {campaign?.media_list.length == 0 && <NoDataFound />}
      <Row gutter={16}>
        {campaign?.media_list.map(({ url, id, type }) => (
          <Col span={8}>
            <Card style={{width:'300px',height:'250px'}} bordered={false}>
              {type == "Image" && <Image src={url} />}
              {type != "Image" && (
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
