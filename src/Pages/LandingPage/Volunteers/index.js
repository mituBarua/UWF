import React, { useEffect } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getVolunteerList } from "../../../Actions/volunteerAction";
import Volunteer from "./Volunteer";

import nextId from "react-id-generator";

const Volunteers = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const { volunteerList } = useSelector((state) => state.volunteer);
  useEffect(() => {
    dispatch(getVolunteerList());
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="helpUs-bg">
      <div className="container">
        <div className="text-center helpUs-text">
          <h2>OUR VOLUNTEER</h2>
          <p>
            Mid Text. Lorem Ipsum Text.Lorem Ipsum Text.Lorem Ipsum Text.Lorem
            Ipsum Text.Lorem Ipsum Text.
          </p>
        </div>
        <br />
        <div>
          <Slider {...settings}>
            {volunteerList?.slice(0, 9).map((volunteerList) => (
              <Volunteer key={nextId()} volunteerList={volunteerList} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Volunteers;
