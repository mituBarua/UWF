import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getNewsList } from "../../../../Actions/newsAction";

import News from "../News";

const Newss = () => {
  const dispatch = useDispatch();
  const { newsList } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(getNewsList());
  }, []);
  return (
    <div className="container">
      <Row className="py-3 my-2">
        {newsList
          ?.filter((item) => item.is_verified == 1)
          .slice(0, 8)
          .map((news) => (

            <News key={news.id} news={news} />

          ))}
      </Row>
    </div>
  );
};

export default Newss;
