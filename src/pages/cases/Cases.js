import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import CommonDrawer from "../../components/commondrawer/CommonDrawer";
import Sidebar from "../../components/sidebar/Sidebar";
import DetailComponent from "../../components/detailcomponent/DetailComponent";
import Loading from "../../components/Loading";

import { drawerWidth } from "../../utils/constants";
import useGetAllCase from "../../hooks/useGetAllCase";

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
  const { data, isLoading } = useGetAllCase();
  const [selectedCase, setSelectedCase] = useState(null);

  let caseList = [];
  if (!isLoading && Array.isArray(data)) {
    caseList = data.map((d) => {
      return {
        id: d?.id,
        valueOne: d?.caseName,
        valueTwo: d?.isCaseOpen ? " Case is Open" : " Case is Closed",
      };
    });
  }

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
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <div className="sidebar">
                <Sidebar
                  page="case"
                  list={caseList}
                  onListSelect={onListSelect}
                />
              </div>
              <div className="detail">
                <DetailComponent page="case" caseDetails={selectedCase} />
              </div>
            </>
          )}
        </div>
      </Main>
    </Box>
  );
};

export default Cases;
