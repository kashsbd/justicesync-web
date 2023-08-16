import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import CommonDrawer from "../../components/commondrawer/CommonDrawer";
import Sidebar from "../../components/sidebar/Sidebar";
import DetailComponent from "../../components/detailcomponent/DetailComponent";

import { drawerWidth } from "../../utils/constants";
import $axios from "../../lib/$axios";

const getAllClientData = async () => {
  try {
    const res = await $axios.get("clients");
    return res.data?.data;
  } catch (error) {
    throw new Error(error);
  }
};

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
  const { data, isLoading } = useQuery({
    queryKey: ["clients"],
    queryFn: getAllClientData,
  });

  const [selectedClient, setSelectedClient] = useState(null);

  const clientList =
    data?.map((d) => {
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
    }) || [];

  const onListSelect = (selectedId) => {
    const filteredData = data?.filter((d) => d?.id === selectedId);
    if (Array.isArray(filteredData) && filteredData.length >= 1) {
      setSelectedClient(filteredData[0]);
    }
  };

  console.log(selectedClient);

  return (
    <Box sx={{ display: "flex" }}>
      <CommonDrawer />
      <Main sx={{ padding: 0 }}>
        <div className="mainContainer">
          <div className="sidebar">
            <Sidebar
              page="client"
              list={clientList}
              onListSelect={onListSelect}
            />
          </div>
          <div className="detail">
            <DetailComponent page="client" />
          </div>
        </div>
      </Main>
    </Box>
  );
};

export default Clients;
