import React, { useState } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import CommonDrawer from "../../components/commondrawer/CommonDrawer";
import Sidebar from "../../components/sidebar/Sidebar";
import DetailComponent from "../../components/detailcomponent/DetailComponent";
import Loading from "../../components/Loading";

import { drawerWidth } from "../../utils/constants";
import useGetAllStaff from "../../hooks/useGetAllStaff";

import "./Staff.css";

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

const Staff = () => {
  const { data: staffs, isLoading } = useGetAllStaff();
  const [selectedStaff, setSelectedStaff] = useState(null);

  let staffList = [];
  if (!isLoading && Array.isArray(staffs)) {
    staffList = staffs.map((d) => {
      return {
        id: d?.id,
        valueOne: d?.firstName + " " + d?.lastName,
        valueTwo: d?.roleType,
      };
    });
  }

  const onListSelect = (selectedId) => {
    const filteredData = staffs?.filter((d) => d?.id === selectedId);
    if (Array.isArray(filteredData) && filteredData.length >= 1) {
      setSelectedStaff(filteredData[0]);
    }
  };

  let staffDetails = [];
  if (selectedStaff) {
    staffDetails = [
      {
        label: "Full Name",
        value:
          selectedStaff?.salutation +
          " " +
          selectedStaff?.firstName +
          " " +
          selectedStaff?.lastName,
      },
      { label: "Role Type", value: selectedStaff?.roleType },
      {
        label: "Global Hourly Rate",
        value: `$${selectedStaff?.globalHourlyRate}.00`,
      },
      { label: "Phone", value: selectedStaff?.phno },
      { label: "Status", value: "Active" },
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
                  page="staff"
                  list={staffList}
                  onListSelect={onListSelect}
                />
              </div>
              <div className="detail">
                <DetailComponent page="staff" staffDetails={staffDetails} />
              </div>
            </>
          )}
        </div>
      </Main>
    </Box>
  );
};

export default Staff;
