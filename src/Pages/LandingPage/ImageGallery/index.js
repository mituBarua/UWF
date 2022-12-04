import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGalleryImageList } from "../../../Actions/imageGalleryAction";
import "./style.css";
import AllImage from "./AllImage";

import nextId from "react-id-generator";
import Spinner from "../../../Components/Spinner";

const ImageGallery = () => {
  const dispatch = useDispatch();
  const { GalleryList } = useSelector((state) => state.imageGallery);
  const [type, setType] = useState("all");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getGalleryImageList());
  }, []);

  useEffect(() => {
    setLoading(true);
    let timer = setTimeout(() => setLoading(false), 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [type]);

  const color = "#c1272d";

  return (
    <div className="container">
      <div>
        <h1 className="text-center">OUR GALLERY</h1>
        <div className="row justify-content-center mt-5">
          <div className="category-btn">
            <div>
              <button
                className="gallery-btn"
                style={{ backgroundColor: type == "all" ? color : null }}
                onClick={() => setType("all")}
              >
                All
              </button>
            </div>
            <div>
              <button
                className="gallery-btn"
                style={{ backgroundColor: type == "appeal" ? color : null }}
                onClick={() => setType("appeal")}
              >
                Appeal
              </button>
            </div>
            <div>
              <button
                className="gallery-btn"
                style={{
                  backgroundColor: type == "project" ? color : null,
                }}
                onClick={() => setType("project")}
              >
                Project
              </button>
            </div>
            <div>
              <button
                className="gallery-btn"
                style={{
                  backgroundColor: type == "campaign" ? color : null,
                }}
                onClick={() => setType("campaign")}
              >
                Campaign
              </button>
            </div>
            <div>
              <button
                className="gallery-btn"
                style={{ backgroundColor: type == "news" ? "#c1272d" : null }}
                onClick={() => setType("news")}
              >
                News
              </button>
            </div>
          </div>
          {loading ? (
            <div>
              <Spinner />
            </div>
          ) : (
            <>
              <div className="row mt-5 justify-content-center">
                {type == "appeal" && (
                  <AllImage
                    key={nextId()}
                    type={type}
                    image={GalleryList?.appeal}
                  />
                )}
              </div>
              <div className="row justify-content-center">
                {type == "project" && (
                  <AllImage
                    key={nextId()}
                    type={type}
                    image={GalleryList?.project}
                  />
                )}
              </div>
              <div className="row justify-content-center">
                {(type == "campaign" || type == "all") && (
                  <AllImage
                    key={nextId()}
                    type={type}
                    image={GalleryList?.campaign}
                  />
                )}
              </div>
              <div className="row justify-content-center">
                {(type == "news" || type == "all") && (
                  <AllImage
                    key={nextId()}
                    type={type}
                    image={GalleryList?.news}
                  />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
