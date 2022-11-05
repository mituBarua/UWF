import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getCampaignDataByID } from "../../../Actions/campaignAction";
import HeaderMenu from "../../Shared/HeaderMenu";
import Banner from "../Banner";

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
              {campaign?.media_list.map(({ url, id }) => (
                <div className="each-slide" key={id}>
                  <img src={url} style={{ width: "100%" }} alt="slide" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="col-md-1"></div>
                    <div className="col-md-4">
                        <div className="categories">
                            <h2>Categories</h2>
                            <ul>
                                <li><a href="/about">About</a></li>
                                <li><a href="/project">Projects</a></li>
                                <li><a href="/appeals">Appeals</a></li>
                                <li><a href="/campaign">Campaign</a></li>
                                <li><a href="/news">News</a></li>
                            </ul>
                        </div>
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
