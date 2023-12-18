import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        height: "20%",
        backgroundColor: "orange",
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >
      <div style={{width:"30%"}}>
        <h2>Logo</h2>
      </div>
      <div style={{display: "flex", justifyContent: "space-between", width:"30%"}}>
        <a href="/" style={{textDecoration:"none", color:"#FFF", fontSize:"22px"}}>Home</a>
        <a href="/" style={{textDecoration:"none", color:"#FFF", fontSize:"22px"}}>Coures</a>
        <a href="/" style={{textDecoration:"none", color:"#FFF", fontSize:"22px"}}>About us</a>
        <a href="/" style={{textDecoration:"none", color:"#FFF", fontSize:"22px"}}>Profile</a>
      </div>
    </div>
  );
};

export default Navbar;
