import React from "react";
import { Divider, Grid, InputLabel } from "@mui/material";

import Title from "../../title/Title";
import DetailData from "../../detaildata/DetailData";

import { colors } from "../../../utils/constants";
import "./Case.css";

const Case = () => {
  return (
    <Grid container spacing={3}>
      <Grid item md={12}>
        <Title color={colors.primaryColor} component="p" title="CASE DETAILS" />
      </Grid>
      <Grid item md={5.5}>
        <DetailData label="Case Ref" value="20230001" />
        <Divider />
      </Grid>
      <Grid item md={5.5}>
        <DetailData label="Created By" value="First Staff Sbd" />
        <Divider />
      </Grid>
      <Grid item md={5.5}>
        <DetailData label="Agreed Fee" value="$1,000.00" />
        <Divider />
      </Grid>
      <Grid item md={5.5}>
        <div className="perRate">
          <div className="permission">
            <span>Permissions:</span> <span className="color"> ALL</span>
          </div>
          <div className="rateType">
            <span> Rate Type:</span>
            <span className="color"> HOURLY</span>
          </div>
          <div>Matter is billable</div>
        </div>
      </Grid>
      <Grid item md={11}>
        <div className="notes">
          <InputLabel>Case Description</InputLabel>
          <p className="des">this is my first case also</p>
        </div>
      </Grid>
      <Grid item md={12}>
        <Title color={colors.primaryColor} component="p" title="CLIENT INFO" />
      </Grid>
      <Grid item md={5.5}>
        <DetailData label="Name" value="Ms.mona sbd" />
        <Divider />
      </Grid>
      <Grid item md={5.5}>
        <DetailData label="Email" value="mona@gmail.com" />
        <Divider />
      </Grid>
      <Grid item md={5.5}>
        <DetailData label="Mobile" value="09786665464" />
        <Divider />
      </Grid>
      <Grid item md={5.5}>
        <DetailData label="Phone" value="09877776555" />
        <Divider />
      </Grid>
      <Grid item md={5.5}>
        <DetailData label="City" value="fairfield" />
        <Divider />
      </Grid>
      <Grid item md={5.5}>
        <DetailData label="State" value="IOWA" />
        <Divider />
      </Grid>
      <Grid item md={5.5}>
        <DetailData label="Country" value="United States" />
        <Divider />
      </Grid>
      <Grid item md={5.5}>
        <DetailData label="Postal Code" value="52557" />
        <Divider />
      </Grid>
      <Grid item md={12}>
        <Title color={colors.primaryColor} component="p" title="LAWYER INFO" />
      </Grid>
      <Grid item md={5.5}>
        <DetailData label="Responsible Lawyer" value="First Staff Sbd" />
        <Divider />
      </Grid>
      <Grid item md={5.5}>
        <DetailData label="Originating Lawyer" value="First Staff Sbd" />
        <Divider />
      </Grid>
      <div style={{ height: "90px" }}></div>
    </Grid>
  );
};

export default Case;
