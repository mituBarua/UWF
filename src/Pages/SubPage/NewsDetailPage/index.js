import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getNewsDataByID } from "../../../Actions/newsAction";

import Banner from "../Banner";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewsDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { news } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(getNewsDataByID(id));
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Banner name="Campaign Details" />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-7">
            <Slider {...settings}>
              {news?.media_list.map(({ url, id }) => (
                <div className="each-slide" key={id}>
                  <img src={url} style={{ width: "100%" }} alt="slide" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="col-md-5"></div>
        </div>
      </div>
    </>
  );
};

export default NewsDetails;
