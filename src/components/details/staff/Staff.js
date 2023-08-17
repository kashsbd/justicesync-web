import React from "react";
import { Avatar, Divider, Grid } from "@mui/material";

import DetailData from "../../detaildata/DetailData";

import { colors, message } from "../../../utils/constants";

const Staff = ({ staffDetails }) => {
  return staffDetails.length === 0 ? (
    <Grid container>
      <Grid item style={{ color: colors.gray }}>{message.staff}</Grid>
    </Grid>
  ) : (
    <Grid container display="flex">
      <Grid
        item
        md={4}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <div style={{ fontSize: "100px" }}>
          <Avatar
            sx={{
              color: colors.primaryColor,
              backgroundColor: colors.dimGrey,
              width: "70%",
              height: "70%",
            }}
            variant="square"
          />
        </div>
      </Grid>
      <Grid item md={6} mr={1}>
        <Grid container>
          {staffDetails.map((staff, key) => {
            return (
              <>
                <Grid mb={2} item md={12}>
                  <DetailData label={staff.label} value={staff.value} />
                  <Divider />
                </Grid>
              </>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Staff;
