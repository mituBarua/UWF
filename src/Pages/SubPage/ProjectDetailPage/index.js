import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import HeaderMenu from "../../Shared/HeaderMenu";
import { getProjectDataByID } from "../../../Actions/projectAction";

import Banner from "../Banner";
import './style.css';
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
            <div className="categories">
              <h2>Categories</h2>
              <ul>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/project">Projects</a>
                </li>
                <li>
                  <a href="/appeals">Appeals</a>
                </li>
                <li>
                  <a href="/campaign">Campaign</a>
                </li>
                <li>
                  <a href="/news">News</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-5 ">
            <div>
              {/* <a
                href="https://checkout.justgiving.com/c/2375023"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  maxWidth: "296px",
                  minWidth: "256px",
                  margin: "12px auto",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "48px",
                    backgroundColor: "#7a04dd",
                    borderRadius: "3px",
                    marginBottom: "12px",
                  }}
                >
                  <img
                    src="https://www.jg-cdn.com/buttons/donate-with-jg.svg"
                    alt="Donate with JustGiving."
                  />
                </span>
                <img
                  src="https://www.jg-cdn.com/buttons/payment-type-logos-gb.svg"
                  alt="Pay with Mastercard, Visa, American Express, PayPal, Bank Transfer, Apple Pay or Direct Debit."
                />
              </a> */}
            </div>
            {project?.paragraphs.slice(0, 6).map(({ title, body, id }) => (
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

export default ProjectDetails;
