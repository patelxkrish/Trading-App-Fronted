import React from "react";
import { Link } from "react-router-dom";
function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img
            src="assets/smallcaseLogo.png"
            alt=""
            style={{ width: "200px", height: "60px" }}
          />
          <p className="text-small text-muted">TAlgo & stratagy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="assets/streakLogo.png"
            alt=""
            style={{ width: "200px", height: "60px" }}
          />
          <p className="text-small text-muted">Option trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="assets\sensibullLogo.svg"
            alt=""
            style={{ width: "200px", height: "60px" }}
          />
          <p className="text-small text-muted">Asist managment</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="assets\zerodhaFundhouse.png"
            alt=""
            style={{ width: "200px", height: "60px" }}
          />
          <p className="text-small text-muted">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="assets/goldenpiLogo.png"
            alt=""
            style={{ width: "200px", height: "60px" }}
          />
          <p className="text-small text-muted">Insurence</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="assets/dittoLogo.png"
            alt=""
            style={{ width: "200px", height: "60px" }}
          />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <Link
          className="p-2 mt-3 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
          to={"/signup"}
        >
          Signup Now
        </Link>
      </div>
    </div>
  );
}

export default Universe;
