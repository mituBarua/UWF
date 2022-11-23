import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import HeaderMenu from "../../Shared/HeaderMenu";
import { getProjectDataByID } from "../../../Actions/projectAction";

import Banner from "../Banner";
import "./style.css";

import Categories from "../../../Components/Categories";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { project } = useSelector((state) => state.project);

  useEffect(() => {
    dispatch(getProjectDataByID(id));
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
      <Banner name="Project Details" />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-7">
            <Slider {...settings}>
              {project?.media_list.map(({ url, id }) => (
                <div className="each-slide" key={id}>
                  <img src={url} style={{ width: "90%" }} alt="slide" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <Categories />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
