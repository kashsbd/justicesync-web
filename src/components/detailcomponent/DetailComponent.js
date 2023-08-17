import React from "react";

import Staff from "../details/staff/Staff";
import Case from "../details/case/Case";
import Client from "../details/client/Client";

const DetailComponent = ({ staffDetails,caseDetails,clientDetails,page }) => {
  return (
    page === "staff" ? (<Staff staffDetails={staffDetails} />)
    : page === "case" ? (<Case caseDetails={caseDetails} />)
    : page === "client" ? (<Client clientDetails={clientDetails} />)
    : ''
  );
};

export default DetailComponent;