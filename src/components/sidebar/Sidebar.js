import React, { useState } from "react";
import { Divider, Typography, colors } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import CreateClient from "../modals/createclient/CreateClient";
import CreateStaff from "../modals/createstaff/CreateStaff";
import CreateCase from "../modals/createcase/CreateCase";

import "./Sidebar.css";

const Sidebar = ({ page, list, onListSelect = () => {} }) => {
  const [open, setOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState(false);

  const searchPlaceHolder =
    page === "case"
      ? "Search Case"
      : page === "staff"
      ? "Search Staff"
      : page === "client"
      ? "Search Client"
      : "";

  const activeHeader =
    page === "case"
      ? "Active Cases"
      : page === "staff"
      ? "All Staffs"
      : page === "client"
      ? "Active Clients"
      : "";

  const handleClick = (id, key) => {
    setSelectedKey(key);
    onListSelect(id);
  };

  const handleCreateForm = () => {
    setOpen(true);
  };

  return (
    <div className="margin">
      <div
        style={{ display: "flex", alignItems: "center", marginRight: "10px" }}
      >
        <div className="searchWrapper">
          <input
            className="searchMe"
            type="text"
            placeholder={searchPlaceHolder}
          />
          <div className="searchIcon">
            <SearchOutlined color="action" />
          </div>
        </div>
        <div
          onClick={handleCreateForm}
          style={{ cursor: "pointer", marginBottom: "13px" }}
        >
          <AddCircleOutlineIcon sx={{ color: "#00bcd4" }} />
        </div>
      </div>

      <Divider />
      <Typography mt="8px" style={{ color: colors.grey }} component="p">
        {activeHeader}
      </Typography>
      <div style={{ marginTop: "8px" }}>
        {list.map((c, key) => {
          return (
            <div
              onClick={(e) => handleClick(c?.id, key)}
              className={key === selectedKey ? "itemOnClick" : "item"}
              key={c?.id || key}
            >
              {c?.valueOne} <br />
              <span style={{ color: "gray" }}>{c?.valueTwo}</span>
            </div>
          );
        })}
      </div>
      {page === "case" ? (
        <CreateCase open={open} setOpen={setOpen} />
      ) : page === "client" ? (
        <CreateClient open={open} setOpen={setOpen} />
      ) : page === "staff" ? (
        <CreateStaff open={open} setOpen={setOpen} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Sidebar;
