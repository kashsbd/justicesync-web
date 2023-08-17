import React, { useState } from "react";
import { Button, ButtonGroup, Grid, Box, Modal } from "@mui/material";

import Company from "../../company/Company";
import { colors } from "../../../utils/constants";

import "./CreateClient.css";

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

const CreateClient = ({ open, setOpen }) => {
  const [value, setValue] = useState("company");
  const [companyVariant, setCompanyVariant] = useState("contained");
  const [personVariant, setPersonVariant] = useState("outlined");

  const handleClose = () => setOpen(false);

  const handleTabChange = (event, value) => {
    let val = event.target.value;
    setValue(val);
    if (val === "company") {
      setCompanyVariant("contained");
      setPersonVariant("outlined");
    } else if (val === "person") {
      setCompanyVariant("outlined");
      setPersonVariant("contained");
    }
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
                  className={
                    companyVariant === "contained"
                      ? "myBtnContained"
                      : "myBtnOutlined"
                  }
                  sx={
                    companyVariant === "contained"
                      ? { backgroundColor: colors.primaryColor }
                      : companyVariant === "outlined"
                      ? {
                          borderColor: colors.primaryColor,
                          color: colors.primaryColor,
                        }
                      : ""
                  }
                  variant={companyVariant}
                  value="company"
                  onClick={handleTabChange}
                >
                  Company
                </Button>
                <Button
                  className={
                    companyVariant === "contained"
                      ? "myBtnContained"
                      : "myBtnOutlined"
                  }
                  sx={
                    personVariant === "contained"
                      ? { backgroundColor: colors.primaryColor }
                      : personVariant === "outlined"
                      ? {
                          borderColor: colors.primaryColor,
                          color: colors.primaryColor,
                        }
                      : ""
                  }
                  variant={personVariant}
                  value="person"
                  onClick={handleTabChange}
                >
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
