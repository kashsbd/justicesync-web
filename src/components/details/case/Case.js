import React from "react";
import { Divider, Grid, InputLabel } from "@mui/material";

import Title from "../../title/Title";
import DetailData from "../../detaildata/DetailData";

import { colors, message } from "../../../utils/constants";
import "./Case.css";

const Case = ({ caseDetails }) => {
  const originatingLawyer = caseDetails?.originatingLawyer;
  const responsibleLawyer = caseDetails?.responsibleLawyer;
  const client = caseDetails?.client;

  const orgLawyer = `${originatingLawyer?.salutation} ${originatingLawyer?.firstName} ${originatingLawyer?.lastName}`;
  const resLawyer = `${responsibleLawyer?.salutation} ${responsibleLawyer?.firstName} ${responsibleLawyer?.lastName}`;
  const clientName = `${client?.salutation} ${client?.firstName} ${client?.lastName}`;

  return caseDetails === null ? (
    <Grid container>
      <Grid item style={{ color: colors.gray }}>
        {message.case}
      </Grid>
    </Grid>
  ) : (
    <Grid container spacing={3}>
      <Grid item md={12}>
        <Title color={colors.primaryColor} component="p" title="CASE DETAILS" />
      </Grid>
      <Grid item md={5.5}>
        <DetailData label="Case Name" value={caseDetails?.caseName} />
        <Divider />
      </Grid>
      <Grid item md={5.5}>
        <DetailData label="Created By" value={orgLawyer} />
        <Divider />
      </Grid>
      {caseDetails?.isCaseOpen && (
        <Grid item md={5.5}>
          <DetailData
            label="Case Open Date"
            value={caseDetails?.caseOpenDate}
          />
          <Divider />
        </Grid>
      )}

      {/* <Grid item md={5.5}>
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
      </Grid> */}
      <Grid item md={11}>
        <div className="notes">
          <InputLabel>Case Description</InputLabel>
          <p className="des">{caseDetails?.caseDescription}</p>
        </div>
      </Grid>
      <Grid item md={12}>
        <Title color={colors.primaryColor} component="p" title="CLIENT INFO" />
      </Grid>
      <Grid item md={5.5}>
        <DetailData label="Name" value={clientName} />
        <Divider />
      </Grid>
      <Grid item md={12}>
        <Title color={colors.primaryColor} component="p" title="LAWYER INFO" />
      </Grid>
      <Grid item md={5.5}>
        <DetailData label="Responsible Lawyer" value={resLawyer} />
        <Divider />
      </Grid>
      <Grid item md={5.5}>
        <DetailData label="Originating Lawyer" value={orgLawyer} />
        <Divider />
      </Grid>
      <div style={{ height: "90px" }}></div>
    </Grid>
  );
};

export default Case;
