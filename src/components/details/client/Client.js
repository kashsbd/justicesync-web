import React from "react";
import { Divider, Grid, Typography } from "@mui/material";

import DetailData from "../../detaildata/DetailData";

import { colors, message } from "../../../utils/constants";
import "./Client.css";

const Client = ({ clientDetails }) => {
  return clientDetails.length === 0 ? (
    <Grid container>
      <Grid item style={{ color: colors.gray }}>{message.client}</Grid>
    </Grid>
  ) : (
    <Grid container spacing={3}>
      <Grid item md={12}>
        <Typography style={{ color: colors.primaryColor }} component="p">
          DETAILS
        </Typography>
      </Grid>
      {clientDetails.length > 0 &&
        clientDetails?.map((c, key) => (
          <Grid key={key} item md={5.5}>
            <DetailData label={c.label} value={c.value} />
            <Divider />
          </Grid>
        ))}

      {/* <Grid item md={11}>
        <div className="notes">
          <InputLabel>Notes</InputLabel>
          <p className="des">this is my first client</p>
        </div>
      </Grid> */}

      <div style={{ height: "90px" }}></div>
    </Grid>
  );
};

export default Client;
