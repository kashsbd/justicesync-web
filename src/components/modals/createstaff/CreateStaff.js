import React, { useContext, useState } from "react";
import { Grid, Box, Modal } from "@mui/material";

import CommonSelect from "../../commonselect/CommonSelect";
import CommonButton from "../../commonbutton/CommonButton";
import InputField from "../../inputfield/InputField";

import SnackBarContext from "../../../contexts/SnackBarContext";

import { roleTypes, salutations } from "../../../utils/constants";
import { exclude, isEmptyString, isNumber } from "../../../utils/functions";

import "./CreateStaff.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const CreateStaff = ({ open, setOpen }) => {
  const [fieldData, setFieldData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    salutation: "",
    firstName: "",
    lastName: "",
    initials: "",
    roleType: "",
    globalHourlyRate: "",
    phno: "",
  });

  const { showSnackBar } = useContext(SnackBarContext);

  const handleCancel = () => {
    setOpen(false);
  };

  const handleClose = () => setOpen(false);

  const onSaveBtnClicked = () => {
    if (isEmptyString(fieldData.salutation)) {
      showSnackBar("Please select salutation.");
    } else if (isEmptyString(fieldData.roleType)) {
      showSnackBar("Please select role type.");
    } else if (isEmptyString(fieldData.firstName)) {
      showSnackBar("Please key in your first name.");
    } else if (isEmptyString(fieldData.lastName)) {
      showSnackBar("Please key in your last name.");
    } else if (!isNumber(fieldData.globalHourlyRate)) {
      showSnackBar("Global hourly rate must be a number.");
    } else if (fieldData.globalHourlyRate <= 0) {
      showSnackBar("Global hourly rate must be greater than 0.");
    } else if (isEmptyString(fieldData.email)) {
      showSnackBar("Please key in your email.");
    } else if (isEmptyString(fieldData.password)) {
      showSnackBar("Please key in your password.");
    } else if (isEmptyString(fieldData.confirmPassword)) {
      showSnackBar("Please key in your confirm password.");
    } else if (fieldData.password !== fieldData.confirmPassword) {
      showSnackBar("Password and confirm password must be equal.");
    } else {
      const dataWithoutConfirmPassword = exclude(fieldData, [
        "confirmPassword",
      ]);
    }
  };

  return (
    <Modal
      sx={{ width: "100%", border: "none" }}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div style={{ height: "100%", overflow: "scroll" }}>
          <Grid container spacing={2}>
            <Grid item md={6} ml={-1}>
              <CommonSelect
                value={fieldData.salutation}
                setValue={(v) => setFieldData({ ...fieldData, salutation: v })}
                label="Salutation"
                width={250}
                fullWidth
                menuItems={salutations}
                required
              />
            </Grid>

            <Grid item md={6}>
              <CommonSelect
                value={fieldData.roleType}
                setValue={(v) => setFieldData({ ...fieldData, roleType: v })}
                label="Select Role Type"
                fullWidth
                menuItems={roleTypes}
                required
              />
            </Grid>

            <Grid item md={6}>
              <InputField
                label="First Name"
                variant="standard"
                required
                fullWidth
                onChange={(e) =>
                  setFieldData({ ...fieldData, firstName: e.target.value })
                }
              />
            </Grid>

            <Grid item md={6}>
              <InputField
                label="Last Name"
                variant="standard"
                required
                fullWidth
                onChange={(e) =>
                  setFieldData({ ...fieldData, lastName: e.target.value })
                }
              />
            </Grid>

            <Grid item md={6}>
              <InputField
                label="Initials"
                variant="standard"
                fullWidth
                onChange={(e) =>
                  setFieldData({ ...fieldData, initials: e.target.value })
                }
              />
            </Grid>

            <Grid item md={6}>
              <InputField
                label="Global Hourly Rate"
                variant="standard"
                required
                fullWidth
                onChange={(e) =>
                  setFieldData({
                    ...fieldData,
                    globalHourlyRate: e.target.value,
                  })
                }
              />
            </Grid>

            <Grid item md={12}>
              <InputField
                label="Email"
                variant="standard"
                required
                fullWidth
                onChange={(e) =>
                  setFieldData({
                    ...fieldData,
                    email: e.target.value,
                  })
                }
              />
            </Grid>

            <Grid item md={12}>
              <InputField
                label="Password"
                variant="standard"
                hiddendLabel
                required
                fullWidth
                onChange={(e) =>
                  setFieldData({
                    ...fieldData,
                    password: e.target.value,
                  })
                }
              />
            </Grid>

            <Grid item md={12}>
              <InputField
                label="Re-enter Password"
                variant="standard"
                hiddendLabel
                required
                fullWidth
                onChange={(e) =>
                  setFieldData({
                    ...fieldData,
                    confirmPassword: e.target.value,
                  })
                }
              />
            </Grid>

            <Grid item md={12}>
              <InputField label="Phone Number" variant="standard" fullWidth />
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
                  onClick={handleCancel}
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

export default CreateStaff;
