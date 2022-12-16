import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getWebCampaignList } from "../../../../Actions/campaignAction";
import Campaign from "../Campaign";
import nextId from "react-id-generator";

const Campaigns = () => {
  const dispatch = useDispatch();
  const { campaignList } = useSelector((state) => state.campaign);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);
  const [list, setList] = useState([]);

  useEffect(() => {
    dispatch(getWebCampaignList());
  }, []);

  useEffect(() => {
    setTotal(campaignList?.length);
  }, [campaignList]);

  useEffect(() => {
    let indexOfLastPage = page * postPerPage;
    let indexOfFirstPage = (page - 1) * postPerPage;

    setList(campaignList?.slice(indexOfFirstPage, indexOfLastPage));
  }, [page, campaignList]);
  return (
    <div className="container">
      <Row className="py-3 my-2">
        {!list && <p>No Data Found </p>}

        {list &&
          list
            ?.filter((item) => item.is_verified == 1)
            .map((campaign) => (
              <Col md="3" sm="6" className="my-2" key={nextId()}>
                <Campaign key={nextId()} campaign={campaign} />
              </Col>
            ))}
      </Row>
      <br />
      {list && (
        <Pagination
          onChange={(value) => setPage(value)}
          pageSize={postPerPage}
          total={total}
          current={page}
          style={{ display: "flex", justifyContent: "center" }}
        />
      )}

      <br />
    </div>
  );
};

export default Campaigns;
