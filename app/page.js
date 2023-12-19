"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Dashboard from "./@layout/Dashboard";
import { Button } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import Tooltip from '@mui/material/Tooltip'

export default function Home() {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setSelectedButton(Button);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div style={{ display: "flex" }}>

        <div
          style={{
            height: "100vh",
            width: "15%",
            backgroundColor: "#0F2167",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            gap: "10px",
            position: "fixed",
            zIndex: "1",
          }}
        >
          <div style={{ display: "flex" }}>
            <Tooltip title="Dashboard" placement="top" arrow>
              <DashboardIcon style={{ color: "#FFF", alignSelf: "center" }} />
            </Tooltip>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              style={{ fontSize: "20px", color: "#FFF", alignSelf: "start", whiteSpace: "nowrap", textTransform: "capitalize", marginLeft: "10px" }}
            >
              Dashboard
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              style={{ alignSelf: "end" }}
            >
              <MenuItem onClick={handleClose}>
                <a href="/" style={{ textDecoration: "none", color: "#000" }}>
                  Profile
                </a>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <a href="/" style={{ textDecoration: "none", color: "#000" }}>
                  My Account
                </a>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <a href="/" style={{ textDecoration: "none", color: "#000" }}>
                  Logout
                </a>
              </MenuItem>
            </Menu>
          </div>

          <div style={{ display: "flex" }}>
            <Tooltip title=" Super Admin" placement="top" arrow>
              <DashboardIcon style={{ color: "#FFF", alignSelf: "center" }} />
            </Tooltip>
            <Button
              id="basic-Button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              style={{ fontSize: "20px", color: "#FFF", alignSelf: "start", whiteSpace: "nowrap", textTransform: "capitalize", marginLeft: "10px" }}
            >
              Super Admin
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-Button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <a href="/" style={{ textDecoration: "none", color: "#000" }}>
                  Profile
                </a>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <a href="/" style={{ textDecoration: "none", color: "#000" }}>
                  My Account
                </a>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <a href="/" style={{ textDecoration: "none", color: "#000" }}>
                  Logout
                </a>
              </MenuItem>
            </Menu>
          </div>

          <div style={{ display: "flex" }}>
            <Tooltip title="Admin" placement="top" arrow>
              <DashboardIcon style={{ color: "#FFF", alignSelf: "center" }} />
            </Tooltip>
            <Button
              id="basic-Button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              style={{ fontSize: "20px", color: "#FFF", alignSelf: "start", textTransform: "capitalize", marginLeft: "10px" }}
            >
              Admin
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-Button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <a href="/" style={{ textDecoration: "none", color: "#000" }}>
                  Profile
                </a>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <a href="/" style={{ textDecoration: "none", color: "#000" }}>
                  My Account
                </a>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <a href="/" style={{ textDecoration: "none", color: "#000" }}>
                  Logout
                </a>
              </MenuItem>
            </Menu>
          </div>

          <div style={{ display: "flex" }}>
            <Tooltip title="Student Name" placement="top" arrow>
              <DashboardIcon style={{ color: "#FFF", alignSelf: "center" }} />
            </Tooltip>
            <Button
              id="basic-Button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              style={{ fontSize: "20px", color: "#FFF", alignSelf: "start", whiteSpace: "nowrap", overflow: "hidden", textTransform: "capitalize", marginLeft: "10px" }}
            >
              Student Name
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-Button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <a href="/" style={{ textDecoration: "none", color: "#000" }}>
                  Profile
                </a>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <a href="/" style={{ textDecoration: "none", color: "#000" }}>
                  My Account
                </a>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <a href="/" style={{ textDecoration: "none", color: "#000" }}>
                  Logout
                </a>
              </MenuItem>
            </Menu>
          </div>

          <div style={{ display: "flex" }}>
            <Tooltip title="Status" placement="top" arrow>
              <DashboardIcon style={{ color: "#FFF", alignSelf: "center" }} />
            </Tooltip>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              style={{ fontSize: "20px", color: "#FFF", alignSelf: "start", textTransform: "capitalize", marginLeft: "10px" }}
            >
              Status
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <a href="/" style={{ textDecoration: "none", color: "#000" }}>
                  Profile
                </a>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <a href="/" style={{ textDecoration: "none", color: "#000" }}>
                  My Account
                </a>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <a href="/" style={{ textDecoration: "none", color: "#000" }}>
                  Logout
                </a>
              </MenuItem>
            </Menu>
          </div>

        </div>

        <div style={{ height: "100vh", width: "100vw", padding: "20px", marginLeft: "15%" }}>
          <h1>Main Page</h1>
          <Dashboard />
        </div>

      </div>
    </>
  );
}
