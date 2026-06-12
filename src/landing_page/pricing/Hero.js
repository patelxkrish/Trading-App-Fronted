import React from "react";
function Hero() {
  return (
    <div className="mt-5 pt-4  container text-center ">
      <div className="mt-4 pt-4 pb-4 row border-bottom">
        <h1 className=" pb-2">Pricing</h1>
        <p className="text-muted mt-4 pb-2">
          Free equity investments and flat ₹20 intraday anf F&O trades{" "}
        </p>
      </div>
      <div className="row">
        <div className="col-4 p-5">
          <img src="assets/pricingEquity.svg" alt="" />
          <h3>Free equity delivery</h3>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="assets/intradayTrades.svg" alt="" />
          <h3>Intraday and F&O trades</h3>
          <p className="text-muted">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="assets/pricingEquity.svg" alt="" />
          <h3>Free direct MF</h3>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
