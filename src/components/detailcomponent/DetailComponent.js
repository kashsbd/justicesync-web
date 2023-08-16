import React from "react";
import { Avatar, Divider, Grid } from "@mui/material";

import { colors } from "../../utils/constants";

const DetailComponent = ({ staffDetails, page }) => {
  return (
    page === "staff" && (
      <Grid container display="flex">
        <Grid
          item
          md={5}
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
        <Grid item md={7}>
          <Grid container>
            {staffDetails.map((staff, key) => {
              return (
                <>
                  <Grid style={{ color: "grey" }} md={6} item>
                    {staff.label} :
                  </Grid>
                  <Grid style={{ color: colors.primaryColor }} md={6} item>
                    {staff.value}
                  </Grid>
                  <Grid mt={2} mb={2} item md={12}>
                    <Divider />
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    )
  );
};

export default DetailComponent;
