import {
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
  colors,
} from "@mui/material";
import React, { useState } from "react";
import InputField from "../inputfield/InputField";
import CommonDatePicker from "../commondatepicker/CommonDatePicker";
import dayjs from "dayjs";
import CommonSelect from "../commonselect/CommonSelect";
import { countries, salutations } from "../../utils/constants";
import CommonTextArea from "../commontextarea/CommonTextArea";
import CommonButton from "../commonbutton/CommonButton";

const Company = ({ value, setOpen }) => {
  const [salutation, setSalutation] = useState("");
  const [createdDate, setCreatedDate] = useState(dayjs(Date.now()));
  const [birthDate, setBirthDate] = useState(dayjs(Date.now()));
  const [createdBy, setCreatedBy] = useState("");
  const [referredBy, setReferredBy] = useState("");

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div style={{ height: "100%", overflow: "scroll" }}>
      <Grid container spacing={2} mt={3}>
        {value === "company" ? (
          <>
            <Grid item md={6}>
              <InputField
                fullWidth
                required
                label="Company Name"
                variant="standard"
              />
            </Grid>
            <Grid item md={6}>
              <InputField fullWidth label="Tax Registered" variant="standard" />
            </Grid>

            <Grid item md={6} mt={1}>
              <InputField
                label="Business Registration Number"
                fullWidth
                variant="standard"
              />
            </Grid>
          </>
        ) : (
          <>
            <Grid item md={6}>
              <InputField
                variant="standard"
                label="ID Card Number"
                required
                fullWidth
              />
            </Grid>
            <Grid item md={6}>
              <CommonDatePicker value={birthDate} setValue={setBirthDate} />
            </Grid>
          </>
        )}

        <Grid mt={3} item md={12}>
          <Divider />
        </Grid>
        <Grid item md={12}>
          <Typography style={{ color: colors.grey }} mt={3}>
            CLIENT ID: N / A
          </Typography>
        </Grid>
        <Grid mt={-1} item md={2}>
          <CommonSelect
            value={salutation}
            setValue={setSalutation}
            label="Salutation"
            width={120}
            menuItems={salutations}
            required
          />
        </Grid>
        <Grid item md={4}>
          <InputField
            label="First Name"
            variant="standard"
            required
            fullWidth
          />
        </Grid>
        <Grid item md={6}>
          <InputField label="Last Name" variant="standard" required fullWidth />
        </Grid>
        <Grid item md={6}>
          <InputField label="Fax" variant="standard" fullWidth />
        </Grid>
        <Grid item md={6}>
          <InputField label="Email" variant="standard" required fullWidth />
        </Grid>
        <Grid item md={6}>
          <InputField label="Mobile" variant="standard" required fullWidth />
        </Grid>
        <Grid item md={6}>
          <InputField label="Phone" variant="standard" fullWidth />
        </Grid>
        <Grid item md={6}>
          <CommonSelect
            label="Created By"
            variant="standard"
            value={createdBy}
            setValue={setCreatedBy}
            menuItems={[]}
            required
            width={"100%"}
          />
        </Grid>

        <Grid item md={6}>
          <CommonSelect
            label="Referred By"
            variant="standard"
            value={referredBy}
            setValue={setReferredBy}
            menuItems={[]}
            required
            width={"100%"}
          />
        </Grid>
        <Grid item md={6}>
          <CommonDatePicker value={createdDate} setValue={setCreatedDate} />
        </Grid>
        <Grid item md={12}>
          <CommonTextArea width="100%" rows={4} label="Notes:" />
        </Grid>
        <Grid item md={6}>
          <InputField label="Address 1" variant="standard" required fullWidth />
        </Grid>
        <Grid item md={6}>
          <InputField label="Address 2" variant="standard" fullWidth />
        </Grid>
        <Grid item md={6}>
          <InputField label="City" variant="standard" required fullWidth />
        </Grid>
        <Grid item md={6}>
          <InputField label="State" variant="standard" required fullWidth />
        </Grid>
        <Grid mt={1} item md={6}>
          <InputField label="Postal Code" variant="standard" fullWidth />
        </Grid>
        <Grid item md={6}>
          <CommonSelect
            label="Country"
            variant="standard"
            menuItems={countries}
            required
            width={"100%"}
          />
        </Grid>
        <Grid item md={12}>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Billing Address is same as above"
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} display="flex" justifyContent="flex-end">
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

      <div style={{ height: "100px" }}></div>
    </div>
  );
};

export default Company;
