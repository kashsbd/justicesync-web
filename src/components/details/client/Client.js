import React from "react";
import { Divider, Grid, InputLabel, Typography } from "@mui/material";

import DetailData from "../../detaildata/DetailData";

import { colors } from "../../../utils/constants";
import "./Client.css";

const Client = () => {
  return (
    <Grid container spacing={3}>
      <Grid item md={12}>
        <Typography style={{ color: colors.primaryColor }} component="p">
          DETAILS
        </Typography>
      </Grid>
      <Grid item md={5.5}>
        <DetailData label="Client Id" value="US0001" />
        <Divider />
      </Grid>
      <Grid item md={5.5}>
        <DetailData label="Name" value="Ms.mona sbd" />
        <Divider />
      </Grid>
      <Grid item md={5.5}>
        <DetailData label="Company Name" value="mona" />
        <Divider />
      </Grid>
      <Grid item md={5.5}>
        <DetailData label="Business Registration Number" value="1234444A" />
        <Divider />
      </Grid>
      <Grid item md={5.5}>
        <DetailData label="Tax Registerred" value="1234" />
        <Divider />
      </Grid>
      <Grid item md={5.5}>
        <DetailData label="Email" value="mona@gmail.com" />
        <Divider />
      </Grid>
      <Grid item md={5.5}>
        <DetailData label="Mobile" value="09786665754" />
        <Divider />
      </Grid>
      <Grid item md={5.5}>
        <DetailData label="Phone" value="0978666543" />
        <Divider />
      </Grid>
      <Grid item md={5.5}>
        <DetailData label="Fax" value="98877" />
        <Divider />
      </Grid>
      <Grid item md={5.5}>
        <DetailData label="Created By" value="First Staff Sbd" />
        <Divider />
      </Grid>
      <Grid item md={11}>
        <div className="notes">
          <InputLabel>Notes</InputLabel>
          <p className="des">this is my first client</p>
        </div>
      </Grid>
      <Grid item md={5.5}>
        <DetailData label="Referred By" value="First Staff Sbd" />
        <Divider />
      </Grid>
      <Grid item md={5.5}>
        <DetailData label="Date Created" value="Aug 13,2023" />
        <Divider />
      </Grid>
      <Grid item md={5.5}>
        <DetailData label="Address 1" value="address one" />
        <Divider />
      </Grid>
      <Grid item md={5.5}>
        <DetailData label="Address 2" value="address two" />
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
      <div style={{ height: "90px" }}></div>
    </Grid>
  );
};

export default Client;
