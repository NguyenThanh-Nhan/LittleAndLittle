import React from "react";
import "../Navbar/Navbar.css";
import {  NavLink } from "react-router-dom";
import { logo1 } from "../../assect/img/1index";

function Navbar (){
    return (
      <div className="navbar_bg">
        <div className="row">
          <div className="col col-4 text-center img-icon1">
            <img src={logo1} alt="" />
          </div>
          <div className="col col-6">
            <div className="row nav-group ">
              <div className="col">
                <NavLink to="/home" className="header-nav">
                  Trang chủ
                </NavLink>
              </div>
              <div className="col">
                <NavLink to="/events" className="header-nav">
                  Sự kiện
                </NavLink>
              </div>
              <div className="col">
                <NavLink to="/contact" className="header-nav">
                  Liên hệ
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col col-2 ">
            <p className="nav-contat">
              <i className="bi bi-telephone-fill"></i>0123456789
            </p>
          </div>
        </div>
      </div>
    );
}

export default Navbar;
