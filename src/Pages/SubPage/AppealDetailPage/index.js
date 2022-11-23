import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAppealDataByID } from "../../../Actions/appealAction";
import Banner from "../Banner";
import HeaderMenu from "../../Shared/HeaderMenu";

import Categories from "../../../Components/Categories";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.css";

const AppealDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { appeal } = useSelector((state) => state.appeal);

  useEffect(() => {
    dispatch(getAppealDataByID(id));
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
      <HeaderMenu />
      <Banner name="Appeal Details" />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-7">
            <Slider {...settings}>
              {appeal?.media_list.map(({ url, id }) => (
                <div className="each-slide" key={id}>
                  <img src={url} style={{ width: "100%" }} alt="slide" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <Categories />
          </div>
          <div className="mt-5 ">
            {appeal?.paragraphs.slice(0, 6).map(({ title, body, id }) => (
              <div key={id} className="paragraph">
                <h4>{title}</h4>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppealDetails;
