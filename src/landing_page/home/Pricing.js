import React from "react";
function Pricing() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-5">
          <h1 className="fs-2 mb-4"> Unbeatable pricing </h1>
          <p className="text-muted">
            We pioneered the concept of discount brocking and price transparency
            in india.Flat fees and no hidden charges
          </p>
          <a href="/" style={{ textDecoration: "none" }}>
            See pricing &nbsp;<i class="fa fa-long-arrow-right"></i>
          </a>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <div className="row text-center">
            <div className="col p-3 border">
              <h1 className="mb-3">₹0</h1>
              <p className="text-muted">
                Free equity delivery and <br /> direct mutual funds
              </p>
            </div>
            <div className="col p-3 border">
              <h1 className="mb-3">₹20</h1>
              <p className="text-muted">Intarday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
