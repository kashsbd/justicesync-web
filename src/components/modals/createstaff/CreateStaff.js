import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./CreateStaff.css";
import { Grid } from "@mui/material";
import CommonSelect from "../../commonselect/CommonSelect";
import CommonButton from "../../commonbutton/CommonButton";
import { roleTypes, salutations, staffTypes } from "../../../utils/constants";
import InputField from "../../inputfield/InputField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: "90%",
  bgcolor: "background.paper",
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CreateStaff = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
  const [salutation, setSalutation] = useState("");
  const [roleType, setRoleType] = useState("");
  const [staffType, setStaffType] = useState("");

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div>
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
              <Grid item md={12}>
                <CommonSelect
                  value={salutation}
                  setValue={setSalutation}
                  label="Salutation"
                  width={250}
                  menuItems={salutations}
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
                <CommonSelect
                  value={roleType}
                  setValue={setRoleType}
                  label="Select Role Type"
                  width={250}
                  menuItems={roleTypes}
                  required
                />
              </Grid>
              <Grid item md={6}>
                <CommonSelect
                  value={staffType}
                  setValue={setStaffType}
                  label="Select Staff Type"
                  width={250}
                  menuItems={staffTypes}
                  required
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
                <InputField
                  label="Email"
                  variant="standard"
                  required
                  fullWidth
                />
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
    </div>
  );
};

export default CreateStaff;
