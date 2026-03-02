import React from "react";
import logo from "../assets/logo.png";
import dollarImg from "../assets/dollar.png";
const Navbar = () => {
  return (
    <div className="navbar bg-amber-50 shadow-sm">
      <div className="flex-1">
        <a className="text-xl py-2.5">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="flex items-center gap-1">
        <p className="font-bold">70000000</p>
        <img src={dollarImg} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
