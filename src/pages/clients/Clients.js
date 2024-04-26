import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import CommonDrawer from "../../components/commondrawer/CommonDrawer";
import Sidebar from "../../components/sidebar/Sidebar";
import DetailComponent from "../../components/detailcomponent/DetailComponent";
import Loading from "../../components/Loading";

import { drawerWidth } from "../../utils/constants";
import useGetAllClient from "../../hooks/useGetAllClient";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const Clients = () => {
  const { data, isLoading } = useGetAllClient();
  const [selectedClient, setSelectedClient] = useState(null);

  let clientList = [];
  if (!isLoading && Array.isArray(data)) {
    clientList = data.map((d) => {
      const baseData = {
        id: d?.id,
        valueTwo:
          d?.createdBy?.salutation +
          " " +
          d?.createdBy?.firstName +
          " " +
          d?.createdBy?.lastName,
      };
      if (d?.type === "company") {
        return {
          ...baseData,
          valueOne: d?.companyName,
        };
      }
      return {
        ...baseData,
        valueOne: d?.salutation + " " + d?.firstName + " " + d?.lastName,
      };
    });
  }

  const onListSelect = (selectedId) => {
    const filteredData = data?.filter((d) => d?.id === selectedId);
    if (Array.isArray(filteredData) && filteredData.length >= 1) {
      setSelectedClient(filteredData[0]);
    }
  };

  let clientDetails = [];
  if (selectedClient) {
    let createdBy = selectedClient?.createdBy;
    let referredBy = selectedClient?.referredBy;
    let buildingAddress = selectedClient?.buildingAddress;
    clientDetails = [
      {
        label: "Client Id",
        value: selectedClient?.idCardNumber,
      },
      {
        label: "Name",
        value: `${selectedClient?.salutation} ${selectedClient?.firstName} ${selectedClient?.lastName}`,
      },
      {
        label: "Company Name",
        value: selectedClient?.companyName,
      },
      { label: "Phone", value: selectedClient?.phno },
      {
        label: "Business Registration Number",
        value: selectedClient?.businessRegistrationNumber,
      },
      { label: "Email", value: selectedClient?.email },
      { label: "Fax", value: selectedClient?.fax },
      {
        label: "Created By",
        value: `${createdBy?.salutation} ${createdBy?.firstName} ${createdBy?.lastName}`,
      },
      {
        label: "Referred By",
        value: `${referredBy?.salutation} ${referredBy?.firstName} ${referredBy?.lastName}`,
      },
      { label: "Date Created", value: selectedClient?.createDate },
      { label: "Address 1", value: buildingAddress?.addressOne },
      { label: "Address 2", value: buildingAddress?.addressTwo },
      { label: "City", value: buildingAddress?.city },
      { label: "State", value: buildingAddress?.state },
      { label: "Country", value: buildingAddress?.country },
      { label: "Postal Code", value: buildingAddress?.postalCode },
    ];
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CommonDrawer />
      <Main sx={{ padding: 0 }}>
        <div className="mainContainer">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <div className="sidebar">
                <Sidebar
                  page="client"
                  list={clientList}
                  onListSelect={onListSelect}
                />
              </div>
              <div className="detail">
                <DetailComponent page="client" clientDetails={clientDetails} />
              </div>
            </>
          )}
        </div>
      </Main>
    </Box>
  );
};

export default Clients;
