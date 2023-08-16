import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import CommonDrawer from "../../components/commondrawer/CommonDrawer";
import Sidebar from "../../components/sidebar/Sidebar";
import DetailComponent from "../../components/detailcomponent/DetailComponent";

import { drawerWidth } from "../../utils/constants";
import $axios from "../../lib/$axios";

const getAllCaseData = async () => {
  try {
    const res = await $axios.get("cases");
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

const Cases = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["cases"],
    queryFn: getAllCaseData,
  });

  const [selectedCase, setSelectedCase] = useState(null);

  const caseList =
    data?.map((d) => {
      return {
        id: d?.id,
        valueOne: d?.caseName,
        valueTwo: d?.isCaseOpen ? " Case is Open" : " Case is Closed",
      };
    }) || [];

  const onListSelect = (selectedId) => {
    const filteredData = data?.filter((d) => d?.id === selectedId);
    if (Array.isArray(filteredData) && filteredData.length >= 1) {
      setSelectedCase(filteredData[0]);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CommonDrawer />
      <Main sx={{ padding: 0 }}>
        <div className="mainContainer">
          <div className="sidebar">
            <Sidebar page="case" list={caseList} onListSelect={onListSelect} />
          </div>
          <div className="detail">
            <DetailComponent page="case" />
          </div>
        </div>
      </Main>
    </Box>
  );
};

export default Cases;
