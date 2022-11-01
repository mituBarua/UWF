import React from "react";
import HeaderMenu from "../../Shared/HeaderMenu";
import Footer from "../../Shared/Footer";
import Banner from "../Banner";
import Newss from "./Newss";

const NewsPage = (props) => {
  return (
    <div>
      <HeaderMenu />
      <Banner name="News" />
      <Newss />
      <Footer />
    </div>
  );
};

export default NewsPage;
