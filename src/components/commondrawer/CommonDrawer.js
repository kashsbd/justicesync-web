import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Avatar } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

import NavigationBar from "../navigationbar/NavigationBar";
import { colors, drawerWidth, getInitials } from "../../utils/constants";
import DrawerItems from "../draweritems/DrawerItems";

import "./CommonDrawer.css";

const itemList = [
  { icon: <PeopleAltIcon />, label: "Staff", link: "staff" },
  { icon: <AccountBoxIcon />, label: "Clients", link: "clients" },
  { icon: <BusinessCenterIcon />, label: "Cases", link: "cases" },
 
];

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const CommonDrawer = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <NavigationBar
        sx={{ backgroundColor: colors.primaryColor }}
        position="fixed"
        open={open}
      >
        <Toolbar>
          <IconButton
            color={colors.black}
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ fontWeight: "bold", mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            sx={{ flexGrow: 1 }}
            color={colors.black}
            variant="h6"
            noWrap
            component="div"
          >
            JusticeSync
          </Typography>
          <Avatar style={{ textAlign: "right" }} sx={{ bgcolor: colors.grey }}>
            <span style={{ color: colors.primaryColor }}>{getInitials()}</span>
          </Avatar>
        </Toolbar>
      </NavigationBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <DrawerItems itemList={itemList} />
      </Drawer>
    </>
  );
};

export default CommonDrawer;
