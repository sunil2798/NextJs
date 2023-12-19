import React from "react";
import Image from 'next/image'
import examimg from './image/examimg.jpg';
import img from './image/img.jpg';

const Navbar = () => {
  return (
    <div
      style={{
        height: "20%",
        backgroundColor: "orange",
        display: "flex",
        justifyContent: "space-evenly",
        padding: "20px",
      }}
    >
      <div style={{ width: "30%", display:"flex", }}>
        <Image src={img} alt="logo"style={{ height: "50px", width: "50px",borderRadius:"10px", marginRight:"10px"}}/>
        <h2>Logo</h2>
      </div>
      <div className="navDiv" style={{ display: "flex", flexWrap: "nowrap", justifyContent: "space-between", width: "60%" }}>
        <a href="/" className="navLink" id="div1">Home</a>
        <a href="/" className="navLink" id="div2">Coures</a>
        <a href="/" className="navLink" id="div3">About us</a>
        <a href="/" className="navLink" id="div4">Profile</a>
      </div>
    </div>
  );
};

export default Navbar;
