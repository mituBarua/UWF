import React from "react";
import HeaderMenu from "../../Shared/HeaderMenu";
import Footer from "../../Shared/Footer";
import Banner from "../Banner";
import Campaigns from "./Campaigns";

const CampaignPage = (props) => {
  return (
    <div>
      <HeaderMenu />
      <Banner name="Campaigns" />
      <Campaigns />
      <Footer />
    </div>
  );
};

export default CampaignPage;
