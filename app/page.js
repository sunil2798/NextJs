"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Home() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
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
            gap: "20px",
          }}
        >
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            style={{ fontSize: "22px", color: "#FFF", alignSelf: "start" }}
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

          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            style={{ fontSize: "22px", color: "#FFF", alignSelf: "start" }}
          >
            Super Admin
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

          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            style={{ fontSize: "22px", color: "#FFF", alignSelf: "start" }}
          >
            Admin
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

          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            style={{ fontSize: "22px", color: "#FFF", alignSelf: "start" }}
          >
            Student Name
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
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            style={{ fontSize: "22px", color: "#FFF", alignSelf: "start" }}
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
        <div style={{ width: "85%", padding: "20px" }}>
          <h1>Main Page</h1>
        </div>
      </div>
    </>
  );
}
