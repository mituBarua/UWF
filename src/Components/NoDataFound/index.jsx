import React from "react";

import NoDataFoundImage from "../../assets/no-data-found.svg";

const NoDataFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={NoDataFoundImage}
        width={200}
        height={200}
        alt="no data found"
      />
      <br />
      <h3>No Data Found</h3>
    </div>
  );
};

export default NoDataFound;
