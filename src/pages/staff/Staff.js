import React from "react";
import CommonDrawer from "../../components/commondrawer/CommonDrawer";
import Sidebar from "../../components/sidebar/Sidebar";
import DetailComponent from "../../components/detailcomponent/DetailComponent";
import { styled } from "@mui/material/styles";
import { drawerWidth } from "../../utils/constants";
import "./Staff.css";
import { Box } from "@mui/material";

const staffList = [
  { case: "this is staff one" },
  { case: "this is staff two" },
  { case: "this is staff three" },
  { case: "this is staff four" },
  ,
];

const staffDetails = [
  {label:"Full Name", value:"Ms.First Staff Sbd"},
  {label:"Role Type", value:"Staff"},
  {label:"Staff Type", value:"Senior Associate"},
  {label:"Global Hourly Rate", value:"$1,000.00"},
  {label:"Phone", value:"097866665765"},
  {label:"Status", value: "Active"}
]

const Staff = () => {
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
          <div className="sidebar">
            <Sidebar page="staff" list={staffList} />
          </div>
          <div className="detail">
            <DetailComponent page="staff" staffDetails={staffDetails} />
          </div>
        </div>
      </Main>
    </Box>
  );
};

export default Staff;
