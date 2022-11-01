import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCampaignList } from "../../../../Actions/campaignAction";

import Campaign from "../Campaign";

const Campaigns = () => {
  const dispatch = useDispatch();
  const { campaignList } = useSelector((state) => state.campaign);

  useEffect(() => {
    dispatch(getCampaignList());
  }, []);
  return (
    <div className="container">
      <Row className="py-3 my-2">
        {campaignList
          ?.filter((item) => item.is_verified == 1)
          .slice(0, 8)
          .map((campaign) => (
            <Col md="3" sm="6" className="my-2">
              <Campaign key={campaign.id} campaign={campaign} />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Campaigns;
