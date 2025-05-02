import React, { useContext, useState } from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";

import { IoMenuSharp, IoHomeSharp } from "react-icons/io5";
import { HiDocumentText } from "react-icons/hi";
import { BsFillGearFill } from "react-icons/bs";
import { MdPhone } from "react-icons/md";
import { FaUser } from "react-icons/fa";

import Drawer from "@mui/material/Drawer";

import CloseIcon from "@mui/icons-material/Close";

import "./Navbar.css";
import { headerData } from "../../data/headerData";
import { ThemeContext } from "../../contexts/ThemeContext";

function Navbar() {
  const { theme, setHandleDrawer } = useContext(ThemeContext);

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    console.log("open", open);

    setHandleDrawer();
  };
  console.log("open from outside", open);
  const handleDrawerClose = () => {
    setOpen(false);
    setHandleDrawer();
  };

  const shortname = (name) => {
    if (name.length > 12) {
      return name.split(" ")[0];
    } else {
      return name;
    }
  };

  return (
    <div className="navbar">
      <div className="navbar--container">
        <h1 style={{ color: theme.secondary }}>{shortname(headerData.name)}</h1>

        <IoMenuSharp
          className="nav-menu"
          onClick={handleDrawerOpen}
          aria-label="Menu"
        />
      </div>

      <Drawer
        variant="temporary"
        onClose={(event, reason) => {
          if (reason !== "backdropClick" && reason !== "escapeKeyDown") {
            handleDrawerClose();
          }
        }}
        anchor="left"
        open={open}
        PaperProps={{ className: "drawer" }}
        disableScrollLock={true}
      >
        <div className="div-closebtn">
          <CloseIcon
            onClick={handleDrawerClose}
            onKeyDown={(e) => {
              if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
                handleDrawerClose();
              }
            }}
            className="close-btn-icon"
            role="button"
            tabIndex="0"
            aria-label="Close"
          />
        </div>
        <br />

        <div onClick={handleDrawerClose}>
          <div className="navLink--container">
            <NavLink to="/" smooth={true} spy="true" duration={2000}>
              <div className="drawer-item">
                <IoHomeSharp className="drawer-icon" />
                <span className="drawer-links">Home</span>
              </div>
            </NavLink>

            <NavLink to="/#about" smooth={true} spy="true" duration={2000}>
              <div className="drawer-item">
                <FaUser className="drawer-icon" />
                <span className="drawer-links">About</span>
              </div>
            </NavLink>

            <NavLink to="/#projects" smooth={true} spy="true" duration={2000}>
              <div className="drawer-item">
                <HiDocumentText className="drawer-icon" />
                <span className="drawer-links">Projects</span>
              </div>
            </NavLink>

            <NavLink to="/#services" smooth={true} spy="true" duration={2000}>
              <div className="drawer-item">
                <BsFillGearFill className="drawer-icon" />
                <span className="drawer-links">Services</span>
              </div>
            </NavLink>

            <NavLink to="/#contacts" smooth={true} spy="true" duration={2000}>
              <div className="drawer-item">
                <MdPhone className="drawer-icon" />
                <span className="drawer-links">Contact</span>
              </div>
            </NavLink>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default Navbar;
