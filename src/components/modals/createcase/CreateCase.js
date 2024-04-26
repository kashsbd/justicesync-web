import React, { useState, useContext } from "react";
import { Grid, Box, Modal } from "@mui/material";
import dayjs from "dayjs";

import CommonSelect from "../../commonselect/CommonSelect";
import CommonButton from "../../commonbutton/CommonButton";
import CommonTextArea from "../../commontextarea/CommonTextArea";
import CommonDatePicker from "../../commondatepicker/CommonDatePicker";
import InputField from "../../inputfield/InputField";

import useGetAllStaff from "../../../hooks/useGetAllStaff";
import useGetAllClient from "../../../hooks/useGetAllClient";
import useCreateCase from "../../../hooks/useCreateCase";
import SnackBarContext from "../../../contexts/SnackBarContext";

import { DATE_FORMAT, caseStatusTypes } from "../../../utils/constants";
import { isEmptyString } from "../../../utils/functions";

import "./CreateCase.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "85%",
  height: "85%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const CreateCase = ({ open, setOpen }) => {
  const [caseData, setCaseData] = useState({
    courtCaseNumber: null,
    caseName: "",
    isCaseBillable: true,
    caseDescription: "",
    clientId: null,
    responsibleLawyerId: null,
    originatingLawyerId: null,
    secretaryInChargeId: null,
    isCaseOpen: true,
    caseOpenDate: dayjs(Date.now()),
  });

  const { mutate } = useCreateCase();
  const { showSnackBar } = useContext(SnackBarContext);
  const { data: staffs } = useGetAllStaff();
  const { data: clients } = useGetAllClient();

  const staffList =
    staffs?.map((stf) => ({
      value: stf?.id,
      label: `${stf?.salutation} ${stf?.firstName} ${stf?.lastName}`,
    })) || [];

  const clientList =
    clients?.map((cli) => ({
      value: cli?.id,
      label:
        cli?.type === "person"
          ? `${cli?.salutation} ${cli?.firstName} ${cli?.lastName}`
          : cli?.companyName,
    })) || [];

  const onSaveBtnClicked = () => {
    if (isEmptyString(caseData.caseName)) {
      showSnackBar("Please key in case name.");
    } else if (!caseData.clientId) {
      showSnackBar("Please select client.");
    } else if (!caseData.responsibleLawyerId) {
      showSnackBar("Please select responsible lawyer.");
    } else if (!caseData.originatingLawyerId) {
      showSnackBar("Please select originating lawyer.");
    } else if (!caseData.secretaryInChargeId) {
      showSnackBar("Please select secretary.");
    } else {
      const dataToSend = {
        ...caseData,
        caseOpenDate: caseData.caseOpenDate.format(DATE_FORMAT),
      };
      mutate(dataToSend, {
        onSuccess: () => {
          showSnackBar("Successfully saved the data.");
        },
        onError: (error) => {
          console.log(error);
          showSnackBar(JSON.stringify(error));
        },
        onSettled: () => setOpen(false),
      });
    }
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div style={{ height: "100%", overflow: "scroll" }}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <InputField
                label="Court Case No."
                variant="standard"
                fullWidth
                value={caseData.courtCaseNumber}
                onChange={(e) =>
                  setCaseData({ ...caseData, courtCaseNumber: e.target.value })
                }
              />
            </Grid>

            <Grid item md={12}>
              <InputField
                label="Case Name"
                variant="standard"
                required
                fullWidth
                value={caseData.caseName}
                onChange={(e) =>
                  setCaseData({ ...caseData, caseName: e.target.value })
                }
              />
            </Grid>

            <Grid item md={12} mt={2}>
              <CommonTextArea
                width="100%"
                rows={4}
                label="Case Description:"
                value={caseData.caseDescription}
                onChange={(e) =>
                  setCaseData({ ...caseData, caseDescription: e.target.value })
                }
              />
            </Grid>

            <Grid item md={12}>
              <CommonSelect
                label="Select Client"
                variant="standard"
                menuItems={clientList}
                required
                fullWidth
                value={caseData.clientId}
                setValue={(val) => setCaseData({ ...caseData, clientId: val })}
              />
            </Grid>

            <Grid item md={6}>
              <CommonSelect
                label="Responsible Lawyer"
                variant="standard"
                menuItems={staffList}
                required
                fullWidth
                value={caseData.responsibleLawyerId}
                setValue={(val) =>
                  setCaseData({ ...caseData, responsibleLawyerId: val })
                }
              />
            </Grid>

            <Grid item md={6}>
              <CommonSelect
                label="Originating Lawyer"
                variant="standard"
                menuItems={staffList}
                required
                fullWidth
                value={caseData.originatingLawyerId}
                setValue={(val) =>
                  setCaseData({ ...caseData, originatingLawyerId: val })
                }
              />
            </Grid>

            <Grid item md={12}>
              <CommonSelect
                label="Select Secretary"
                variant="standard"
                menuItems={staffList}
                required
                fullWidth
                value={caseData.secretaryInChargeId}
                setValue={(val) =>
                  setCaseData({ ...caseData, secretaryInChargeId: val })
                }
              />
            </Grid>

            <Grid item md={12} mt={2}>
              <CommonDatePicker
                fullWidth
                value={caseData.caseOpenDate}
                setValue={(val) =>
                  setCaseData({ ...caseData, caseOpenDate: val })
                }
              />
            </Grid>

            <Grid item md={12} mt={0}>
              <CommonSelect
                label="Status"
                variant="standard"
                menuItems={caseStatusTypes}
                required
                fullWidth
                value={caseData.isCaseOpen ? "Open" : "Closed"}
                setValue={(val) =>
                  setCaseData({ ...caseData, isCaseOpen: val === "Open" })
                }
              />
            </Grid>

            <Grid
              container
              mt={2}
              spacing={2}
              display="flex"
              justifyContent="flex-end"
            >
              <Grid item>
                <CommonButton
                  onClick={() => setOpen(false)}
                  label="Cancel"
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <CommonButton
                  label="Save"
                  variant="contained"
                  onClick={onSaveBtnClicked}
                />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Modal>
  );
};

export default CreateCase;
