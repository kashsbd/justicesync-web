import React, { useState, useContext } from "react";
import { Grid } from "@mui/material";
import dayjs from "dayjs";

import InputField from "../inputfield/InputField";
import CommonDatePicker from "../commondatepicker/CommonDatePicker";
import CommonSelect from "../commonselect/CommonSelect";
import CommonTextArea from "../commontextarea/CommonTextArea";
import CommonButton from "../commonbutton/CommonButton";

import SnackBarContext from "../../contexts/SnackBarContext";
import useGetAllStaff from "../../hooks/useGetAllStaff";
import useCreateClient from "../../hooks/useCreateClient";

import { DATE_FORMAT, countries, salutations } from "../../utils/constants";
import { isEmptyString } from "../../utils/functions";

const Company = ({ value, setOpen }) => {
  const [clientData, setClientData] = useState({
    type: "",
    companyName: "",
    businessRegistrationNumber: null,
    idCardNumber: "",
    dateOfBirth: dayjs(Date.now()),
    salutation: "",
    firstName: "",
    lastName: "",
    email: "",
    phno: "",
    createdById: "",
    referredById: "",
    createDate: dayjs(Date.now()),
    note: "",
    isSameAsBillingAddress: true,
  });

  const [address, setAddress] = useState({
    addressOne: "",
    addressTwo: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  const { mutate } = useCreateClient();
  const { showSnackBar } = useContext(SnackBarContext);
  const { data: staffs } = useGetAllStaff();

  const staffList =
    staffs?.map((stf) => ({
      value: stf?.id,
      label: `${stf?.salutation} ${stf?.firstName} ${stf?.lastName}`,
    })) || [];

  const onSaveBtnClicked = () => {
    if (value === "company" && isEmptyString(clientData.companyName)) {
      showSnackBar("Please key in your company name.");
    } else if (value === "person" && isEmptyString(clientData.idCardNumber)) {
      showSnackBar("Please key in your id card number.");
    } else if (isEmptyString(clientData.salutation)) {
      showSnackBar("Please select salutation.");
    } else if (isEmptyString(clientData.firstName)) {
      showSnackBar("Please key in your first name.");
    } else if (isEmptyString(clientData.lastName)) {
      showSnackBar("Please key in your last name.");
    } else if (isEmptyString(clientData.email)) {
      showSnackBar("Please key in your email.");
    } else if (isEmptyString(clientData.phno)) {
      showSnackBar("Please key in phone number.");
    } else if (isEmptyString(clientData.createdById)) {
      showSnackBar("Please select created by.");
    } else if (isEmptyString(clientData.referredById)) {
      showSnackBar("Please select referred by.");
    } else if (isEmptyString(address.addressOne)) {
      showSnackBar("Please key in address one.");
    } else if (isEmptyString(address.addressTwo)) {
      showSnackBar("Please key in address two.");
    } else if (isEmptyString(address.city)) {
      showSnackBar("Please key in city.");
    } else if (isEmptyString(address.state)) {
      showSnackBar("Please key in state.");
    } else if (isEmptyString(address.postalCode)) {
      showSnackBar("Please key in postal code.");
    } else if (isEmptyString(address.country)) {
      showSnackBar("Please select country.");
    } else {
      const baseData = {
        ...clientData,
        postalAddress: address,
        createDate: clientData.createDate.format(DATE_FORMAT),
        type: value,
      };
      let dataToSend = { ...baseData, dateOfBirth: null, idCardNumber: null };
      if (value === "person") {
        dataToSend = {
          ...baseData,
          dateOfBirth: clientData.dateOfBirth.format(DATE_FORMAT),
          companyName: null,
          businessRegistrationNumber: null,
        };
      }
      mutate(dataToSend, {
        onSuccess: () => showSnackBar("Successfully saved the data."),
        onError: (error) => {
          console.log(error);
          showSnackBar(JSON.stringify(error));
        },
        onSettled: () => setOpen(false),
      });
    }
  };

  return (
    <div style={{ height: "100%", overflow: "scroll" }}>
      <Grid container spacing={2} mt={2}>
        {value === "company" ? (
          <>
            <Grid item md={6}>
              <InputField
                fullWidth
                required
                label="Company Name"
                variant="standard"
                value={clientData.companyName}
                onChange={(e) =>
                  setClientData({ ...clientData, companyName: e.target.value })
                }
              />
            </Grid>
            <Grid item md={6}>
              <InputField
                label="Business Registration Number"
                fullWidth
                variant="standard"
                value={clientData.businessRegistrationNumber}
                onChange={(e) =>
                  setClientData({
                    ...clientData,
                    businessRegistrationNumber: e.target.value,
                  })
                }
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
                value={clientData.idCardNumber}
                onChange={(e) =>
                  setClientData({
                    ...clientData,
                    idCardNumber: e.target.value,
                  })
                }
              />
            </Grid>
            <Grid item md={6}>
              <CommonDatePicker
                label="Date Of Birth"
                value={clientData.dateOfBirth}
                setValue={(e) =>
                  setClientData({
                    ...clientData,
                    dateOfBirth: e,
                  })
                }
              />
            </Grid>
          </>
        )}

        <Grid item md={2} ml={-1} mt={-1}>
          <CommonSelect
            label="Salutation"
            width={120}
            menuItems={salutations}
            required
            value={clientData.salutation}
            setValue={(val) =>
              setClientData({ ...clientData, salutation: val })
            }
          />
        </Grid>
        <Grid item md={4}>
          <InputField
            label="First Name"
            variant="standard"
            required
            fullWidth
            value={clientData.firstName}
            onChange={(e) =>
              setClientData({
                ...clientData,
                firstName: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item md={6}>
          <InputField
            label="Last Name"
            variant="standard"
            required
            fullWidth
            value={clientData.lastName}
            onChange={(e) =>
              setClientData({
                ...clientData,
                lastName: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item md={6}>
          <InputField
            label="Email"
            variant="standard"
            required
            fullWidth
            value={clientData.email}
            onChange={(e) =>
              setClientData({
                ...clientData,
                email: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item md={6}>
          <InputField
            label="Phone"
            variant="standard"
            required
            fullWidth
            value={clientData.phno}
            onChange={(e) =>
              setClientData({
                ...clientData,
                phno: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item md={6} ml={-1}>
          <CommonSelect
            label="Created By"
            variant="standard"
            value={clientData.createdById}
            setValue={(val) =>
              setClientData({ ...clientData, createdById: val })
            }
            menuItems={staffList}
            required
            width={"100%"}
          />
        </Grid>

        <Grid item md={6}>
          <CommonSelect
            label="Referred By"
            variant="standard"
            value={clientData.referredById}
            setValue={(val) =>
              setClientData({ ...clientData, referredById: val })
            }
            menuItems={staffList}
            required
            width={"100%"}
          />
        </Grid>
        <Grid item md={6}>
          <CommonDatePicker
            value={clientData.createDate}
            setValue={(val) =>
              setClientData({ ...clientData, createDate: val })
            }
          />
        </Grid>
        <Grid item md={12}>
          <CommonTextArea
            width="100%"
            rows={4}
            label="Notes:"
            value={clientData.note}
            onChange={(e) =>
              setClientData({
                ...clientData,
                note: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item md={6}>
          <InputField
            label="Address 1"
            variant="standard"
            required
            fullWidth
            value={address.addressOne}
            onChange={(e) =>
              setAddress({
                ...address,
                addressOne: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item md={6}>
          <InputField
            label="Address 2"
            variant="standard"
            required
            fullWidth
            value={address.addressTwo}
            onChange={(e) =>
              setAddress({
                ...address,
                addressTwo: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item md={6}>
          <InputField
            label="City"
            variant="standard"
            required
            fullWidth
            value={address.city}
            onChange={(e) =>
              setAddress({
                ...address,
                city: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item md={6}>
          <InputField
            label="State"
            variant="standard"
            required
            fullWidth
            value={address.state}
            onChange={(e) =>
              setAddress({
                ...address,
                state: e.target.value,
              })
            }
          />
        </Grid>
        <Grid mt={1} item md={6}>
          <InputField
            label="Postal Code"
            variant="standard"
            required
            fullWidth
            value={address.postalCode}
            onChange={(e) =>
              setAddress({
                ...address,
                postalCode: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item md={6}>
          <CommonSelect
            label="Country"
            variant="standard"
            menuItems={countries}
            required
            width={"100%"}
            value={address.country}
            setValue={(val) =>
              setAddress({
                ...address,
                country: val,
              })
            }
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} display="flex" justifyContent="flex-end">
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

      <div style={{ height: "30px" }}></div>
    </div>
  );
};

export default Company;
