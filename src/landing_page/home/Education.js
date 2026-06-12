import React from "react";
function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img
            src="assets/education.svg"
            style={{ width: "70%" }}
            alt="largestBroker"
          />
        </div>
        <div className="col-6 p-5 ">
          <h1 className="fs-2 mb-4">Free and open market education</h1>
          <p className="text-muted mt-4">
            Varsity,the largest online stock market education book in the world
            covering everything from the basics to advanced trading
          </p>
          <a href="/" style={{ textDecoration: "none" }}>
            Versity&nbsp;<i class="fa fa-long-arrow-right"></i>
          </a>
          <p className="text-muted mt-4">
            TradingQ&A,the most active trading and ivestment community in inda
            for all your market queries{" "}
          </p>
          <a href="/" style={{ textDecoration: "none" }}>
            Trading Q&A&nbsp;<i class="fa fa-long-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
