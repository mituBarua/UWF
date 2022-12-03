import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGalleryImageList } from "../../../Actions/imageGalleryAction";
import "./style.css";
import AllImage from "./AllImage";

const ImageGallery = () => {
  const dispatch = useDispatch();
  const { GalleryList } = useSelector((state) => state.imageGallery);
  const [type, setType] = useState("all");

  useEffect(() => {
    dispatch(getGalleryImageList());
  }, []);

  return (
    <div className="container">
      <div>
        <h1 className="text-center">OUR GALLERY</h1>
        <div className="row justify-content-center mt-5">
          <div className="category-btn">
            <div>
              <button className="gallery-btn" onClick={() => setType("all")}>
                All
              </button>
            </div>
            <div>
              <button className="gallery-btn" onClick={() => setType("appeal")}>
                Appeal
              </button>
            </div>
            <div>
              <button
                className="gallery-btn"
                onClick={() => setType("project")}
              >
                Project
              </button>
            </div>
            <div>
              <button
                className="gallery-btn"
                onClick={() => setType("campaign")}
              >
                Campaign
              </button>
            </div>
            <div>
              <button className="gallery-btn" onClick={() => setType("news")}>
                News
              </button>
            </div>
          </div>
          <div className="row mt-5 justify-content-center">
            {type == "appeal" && (
              <AllImage type={type} image={GalleryList?.appeal} />
            )}
          </div>
          <div className="row justify-content-center">
            {type == "project" && (
              <AllImage type={type} image={GalleryList?.project} />
            )}
          </div>
          <div className="row justify-content-center">
            {(type == "campaign" || type == "all") && (
              <AllImage type={type} image={GalleryList?.campaign} />
            )}
          </div>
          <div className="row justify-content-center">
            {(type == "news" || type == "all") && (
              <AllImage type={type} image={GalleryList?.news} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
