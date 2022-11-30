import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getNewsList } from "../../../../Actions/newsAction";
import { Pagination } from "antd";
import News from "../News";

const Newss = () => {
  const dispatch = useDispatch();
  const { newsList } = useSelector((state) => state.news);
  const [total, setTotal] = useState("");
  const [page, setPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);
  const [list, setList] = useState([]);

  useEffect(() => {
    dispatch(getNewsList());
    setTotal(newsList?.length);
  }, []);
  useEffect(() => {
    let indexOfLastPage = page * postPerPage
    let indexOfFirstPage = ((page - 1) * postPerPage)

    setList(newsList?.slice(indexOfFirstPage, indexOfLastPage));
  }, [page]);
  return (
    <div className="container">
      <Row className="py-3 my-2">
        {list
          ?.filter((item) => item.is_verified == 1)
          .map((news) => (

            <News key={news.id} news={news} />

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

export default Newss;
