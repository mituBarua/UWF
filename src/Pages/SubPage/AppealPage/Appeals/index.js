import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAppealList } from "../../../../Actions/appealAction";
import Appeal from "../Appeal";
const Appeals = () => {
  const dispatch = useDispatch();
  const { appealList } = useSelector((state) => state.appeal);
  const [total, setTotal] = useState("");
  const [page, setPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);
  const [list, setList] = useState([]);
  
  useEffect(() => {
    dispatch(getAppealList());
    setTotal(appealList?.length);
  }, []);
  useEffect(() => {
    let indexOfLastPage = page  * postPerPage
    let indexOfFirstPage = ((page -1) * postPerPage)
 
    setList(appealList?.slice(indexOfFirstPage, indexOfLastPage));
  }, [page]);

  return (
    <div className="container">
      <Row className="py-3 my-2">
        {list
          ?.filter((item) => item.is_verified === 1)
          .map((appealList) => (
            <Appeal key={appealList.id} appealList={appealList}></Appeal>
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

export default Appeals;
