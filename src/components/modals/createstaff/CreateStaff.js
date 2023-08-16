import React, { useState } from "react";
import { Grid, Box, Modal } from "@mui/material";

import CommonSelect from "../../commonselect/CommonSelect";
import CommonButton from "../../commonbutton/CommonButton";
import InputField from "../../inputfield/InputField";

import { roleTypes, salutations } from "../../../utils/constants";

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
  const [salutation, setSalutation] = useState("");
  const [roleType, setRoleType] = useState("");

  const handleCancel = () => {
    setOpen(false);
  };

  const handleClose = () => setOpen(false);

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
                value={salutation}
                setValue={setSalutation}
                label="Salutation"
                width={250}
                fullWidth
                menuItems={salutations}
                required
              />
            </Grid>

            <Grid item md={6}>
              <CommonSelect
                value={roleType}
                setValue={setRoleType}
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
              />
            </Grid>

            <Grid item md={6}>
              <InputField
                label="Last Name"
                variant="standard"
                required
                fullWidth
              />
            </Grid>

            <Grid item md={6}>
              <InputField label="Initials" variant="standard" fullWidth />
            </Grid>

            <Grid item md={6}>
              <InputField
                label="Global Hourly Rate"
                variant="standard"
                required
                fullWidth
              />
            </Grid>

            <Grid item md={12}>
              <InputField label="Email" variant="standard" required fullWidth />
            </Grid>

            <Grid item md={12}>
              <InputField
                label="Password"
                variant="standard"
                hiddendLabel
                required
                fullWidth
              />
            </Grid>

            <Grid item md={12}>
              <InputField
                label="Re-enter Password"
                variant="standard"
                hiddendLabel
                required
                fullWidth
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
                <CommonButton label="Save" variant="contained" />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Modal>
  );
};

export default CreateStaff;
