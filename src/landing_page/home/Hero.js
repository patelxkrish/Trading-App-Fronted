import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="container p-5 mb-5 mt-5">
      <div className="row text-center">
        <img src="/assets/homehero.png" className="mb-5" alt="heroImage" />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks,derivatives,mutual funds,and more
        </p>
        <Link
          style={{ width: "20%", margin: "0 auto" }}
          className="mb-5 p-2 btn btn-lg btn-primary fs-6"
          to={"/signup"}
        >
          Signup Now
        </Link>
      </div>
    </div>
  );
}

export default Hero;
