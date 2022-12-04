import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCampaignList } from "../../../Actions/campaignAction";
import EachCampaign from "../EachCampaign";
import { Pagination } from "antd";

import nextId from "react-id-generator";

const Campaign = () => {
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(4);
  const [list, setList] = useState([]);

  const {
    user: { accessToken },
  } = useSelector((state) => state.user);
  const { campaignList } = useSelector((state) => state.campaign);

  useEffect(() => {
    dispatch(getCampaignList());
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
      <div className="text-center">
        <h2>CAMPAIGN</h2>
        <p>
          Mid Text. Lorem Ipsum Text.Lorem Ipsum Text.Lorem Ipsum Text. Lorem
          Ipsum Text.Lorem Ipsum Text.
        </p>
      </div>
      <Row className="py-3 my-2">
        {!list && <p>No Data Found </p>}
        {list &&
          list
            ?.filter((item) => item.is_verified == 1)
            .map((campaign) => (
              <Col md="3" sm="6" className="my-2" key={nextId()}>
                <EachCampaign key={nextId()} campaignList={campaign} />
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
    </div>
  );
};

export default Campaign;
