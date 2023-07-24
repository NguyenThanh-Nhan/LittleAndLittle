import React from "react";
import { Link } from "react-router-dom";
import "../PageError/PageError.css";

function PageError() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="page-404">
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <div className="inner-circle">
                    <i className="fa fa-home"></i>
                    <span>404</span>
                  </div>
                  <Link className="btn btn-warning mtl" to={"/home"}>
                    <i className="bi bi-house-fill"></i>&nbsp; Return home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageError;
