import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";
import dayjs from "dayjs";

import CommonSelect from "../../commonselect/CommonSelect";
import CommonButton from "../../commonbutton/CommonButton";
import CommonTextArea from "../../commontextarea/CommonTextArea";
import CommonDatePicker from "../../commondatepicker/CommonDatePicker";
import InputField from "../../inputfield/InputField";

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
  const [referredBy, setReferredBy] = useState("");
  const [createdDate, setCreatedDate] = useState(dayjs(Date.now()));

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div style={{ height: "100%", overflow: "scroll" }}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <InputField label="Court Case No." variant="standard" fullWidth />
            </Grid>

            <Grid item md={12}>
              <InputField
                label="Case Name"
                variant="standard"
                required
                fullWidth
              />
            </Grid>

            <Grid item md={12} mt={2}>
              <CommonTextArea width="100%" rows={4} label="Case Description:" />
            </Grid>

            <Grid item md={12}>
              <CommonSelect
                label="Select Client"
                variant="standard"
                value={referredBy}
                setValue={setReferredBy}
                menuItems={[]}
                required
                fullWidth
              />
            </Grid>

            <Grid item md={6}>
              <CommonSelect
                label="Responsible Lawyer"
                variant="standard"
                value={referredBy}
                setValue={setReferredBy}
                menuItems={[]}
                required
                fullWidth
              />
            </Grid>

            <Grid item md={6}>
              <CommonSelect
                label="Originating Lawyer"
                variant="standard"
                value={referredBy}
                setValue={setReferredBy}
                menuItems={[]}
                required
                fullWidth
              />
            </Grid>

            <Grid item md={12}>
              <CommonSelect
                label="Select Secretary"
                variant="standard"
                value={referredBy}
                setValue={setReferredBy}
                menuItems={[]}
                required
                fullWidth
              />
            </Grid>

            <Grid item md={12} mt={2}>
              <CommonDatePicker
                value={createdDate}
                setValue={setCreatedDate}
                fullWidth
              />
            </Grid>

            <Grid item md={12} mt={0}>
              <CommonSelect
                label="Status"
                variant="standard"
                value={referredBy}
                setValue={setReferredBy}
                menuItems={[]}
                required
                fullWidth
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
                <CommonButton label="Save" variant="contained" />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Modal>
  );
};

export default CreateCase;
