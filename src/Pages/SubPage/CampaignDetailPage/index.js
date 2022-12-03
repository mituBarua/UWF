import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getCampaignDataByID } from "../../../Actions/campaignAction";
import HeaderMenu from "../../Shared/HeaderMenu";
import Banner from "../Banner";

import Categories from "../../../Components/Categories";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CampaignDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { campaign } = useSelector((state) => state.campaign);

  useEffect(() => {
    dispatch(getCampaignDataByID(id));
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
      <Banner name="Campaign Details" />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-7">
            <Slider {...settings}>
              {campaign?.media_list.map(({ url, id,type }) => (
                <div className="each-slide" key={id}>
                {type == 'Image' &&  <img src={url} style={{ width: "100%" }} alt="slide" /> }
                 {type != 'Image' &&  <iframe src={url} height="400" width="600" alt="slide" /> }
                </div>
              ))}
            </Slider>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <Categories />
          </div>
          <div className="mt-5 ">
            {campaign?.paragraphs.slice(0, 6).map(({ title, body, id }) => (
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

export default CampaignDetails;
