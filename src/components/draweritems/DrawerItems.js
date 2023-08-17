import React, { useState } from "react";

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {  useNavigate } from "react-router-dom";



const DrawerItems = ({itemList}) => {
    const navigate = useNavigate();
    const [selectedValue,setSelectedValue] = useState('Cases');
    const handleClick = (item) => {
        setSelectedValue(item);
        navigate(`/${item}`);
    }
  return (
    <List>
      {itemList.map((item, key) =>  (
            <ListItem onClick={() => handleClick(item.link)} key={key} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
        )
      )}
    </List>
  );
};

export default DrawerItems;
