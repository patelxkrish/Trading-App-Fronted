import React from "react";

function Awards() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="assets/largestBroker.svg" alt="largestBroker" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha client contribute to over 15% of all retail order
            volumes in india daily by trading and investing in{" "}
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options </p>
                </li>
                <li>
                  <p>Comodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and derivatives</p>
                </li>
              </ul>
            </div>
          </div>
          <img
            style={{ width: "90%" }}
            src="assets/pressLogos.png"
            alt="pressLogos"
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
