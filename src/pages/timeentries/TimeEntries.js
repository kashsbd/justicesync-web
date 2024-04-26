import React from "react";
import CommonDrawer from "../../components/commondrawer/CommonDrawer";
import Sidebar from "../../components/sidebar/Sidebar";
import DetailComponent from "../../components/detailcomponent/DetailComponent";
import { styled } from "@mui/material/styles";
import { drawerWidth } from "../../utils/constants";
import "./TimeEntries.css";
import { Box } from "@mui/material";

const TimeEntries = () => {
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
  return (
    <Box sx={{ display: "flex" }}>
      <CommonDrawer />
      <Main sx={{ padding: 0 }}>
        <div className="mainContainer">
          {/* <div className="sidebar">
            <Sidebar />
          </div> */}
          <div className="detail">
            <DetailComponent />
          </div>
        </div>
      </Main>
    </Box>
  );
};

export default TimeEntries;
