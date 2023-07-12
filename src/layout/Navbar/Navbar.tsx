import React from "react";
// import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar_bg">
      <div className="row">
        <div className="col col-2"></div>
        <div className="col">
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
        <div className="col">
          <p className="nav-contat">
            <i className="bi bi-telephone-fill"></i>0123456789
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
