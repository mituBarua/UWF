import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAppealByID } from "../../../Actions/appealAction";
import Banner from "../Banner";
import HeaderMenu from "../../Shared/HeaderMenu";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import './style.css';
import "slick-carousel/slick/slick-theme.css";
const AppealDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { appeal } = useSelector((state) => state.appeal);

    useEffect(() => {
        dispatch(getAppealByID(id));
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
                    <div className="col-md-8">
                        <Slider {...settings}>
                            {appeal?.media_list.map(({ url, id }) => (
                                <div className="each-slide" key={id}>
                                    <img src={url} style={{ width: "100%" }} alt="slide" />
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3">
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
