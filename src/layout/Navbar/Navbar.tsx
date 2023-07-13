import React from "react";
// import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
import { logo1 } from "../../assect/img/1index";

function Navbar() {
  return (
    <div className="navbar_bg">
      <div className="row">
        <div className="col col-4 text-center img-icon1">
          <img src={logo1} alt="" />
        </div>
        <div className="col col-6">
          <div className="row">
            <div className="col text-end">
              <Link to="/" className="nav-link">
                <button className="nav-bt" type="button">
                  Trang chủ
                </button>
              </Link>
            </div>
            <div className="col">
              <Link to="/events" className="nav-link">
                <button className="nav-bt" type="button">
                  Sự kiện
                </button>
              </Link>
            </div>
            <div className="col">
              <Link to="/contact" className="nav-link">
                <button className="nav-bt" type="button">
                  Liên hệ
                </button>
              </Link>
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
