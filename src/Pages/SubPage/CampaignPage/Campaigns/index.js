import React, { useEffect,useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getCampaignList } from "../../../../Actions/campaignAction";

import Campaign from "../Campaign";

const Campaigns = () => {
  const dispatch = useDispatch();
  const { campaignList } = useSelector((state) => state.campaign);
  const [total, setTotal] = useState("");
  const [page, setPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);
  const [list, setList] = useState([]);
  useEffect(() => {
    dispatch(getCampaignList());
    setTotal(campaignList?.length);
  }, []);
  useEffect(() => {
    let indexOfLastPage = page  * postPerPage
    let indexOfFirstPage = ((page -1) * postPerPage)
    
    setList(campaignList?.slice(indexOfFirstPage, indexOfLastPage));
  }, [page]);
  return (
    <div className="container">
      <Row className="py-3 my-2">
        {list
          ?.filter((item) => item.is_verified == 1)
          .map((campaign) => (
            <Col md="3" sm="6" className="my-2">
              <Campaign key={campaign.id} campaign={campaign} />
            </Col>
          ))}
      </Row>
      <br />
      <Pagination
        onChange={(value) => setPage(value)}
        pageSize={postPerPage}
        total={total}
        current={page}
        style={{ display: "flex", justifyContent: "center" }}
      />
      <br />
    </div>
  );
};

export default Campaigns;
