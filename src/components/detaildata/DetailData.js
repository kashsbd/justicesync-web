import React from "react";

import "./DetailData.css";

const DetailData = ({ label, value }) => {
  return (
    <div className="leftRightText">
      <div className="leftText">{label}</div>
      <div className="rightText">{value}</div>
    </div>
  );
};

export default DetailData;
