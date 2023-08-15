import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./CreateClient.css";
import { Button, ButtonGroup, Grid, colors } from "@mui/material";
import Company from "../../company/Company";
import CommonButton from "../../commonbutton/CommonButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "85%",
  height: "85%",
  bgcolor: "background.paper",
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CreateClient = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
  const [value, setValue] = useState("company");

  const handleTabChange = (event, val) => {
    setValue(event.target.value);
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
          <Grid container>
            <Grid item md={12} textAlign="center">
              <ButtonGroup variant="contained">
                <Button
                  sx={{ color: colors.grey }}
                  value="company"
                  onClick={handleTabChange}
                >
                  Company
                </Button>
                <Button value="person" onClick={handleTabChange}>
                  Person
                </Button>
              </ButtonGroup>
            </Grid>
           
          </Grid>
          <Company value={value} setOpen={setOpen} />
        </Box>
      </Modal>
    </div>
  );
};

export default CreateClient;
