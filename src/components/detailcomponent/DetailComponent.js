import React from "react";

import Staff from "../details/staff/Staff";
import Case from "../details/case/Case";
import Client from "../details/client/Client";

const DetailComponent = ({ staffDetails,page }) => {
  return (
    page === "staff" ? (<Staff staffDetails={staffDetails} />)
    : page === "case" ? (<Case />)
    : page === "client" ? (<Client />)
    : ''
  );
};

export default DetailComponent;