import React from "react";
import { Link } from "react-router-dom";

function OpeanAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">Open a Zerodha account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades{" "}
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

export default OpeanAccount;
