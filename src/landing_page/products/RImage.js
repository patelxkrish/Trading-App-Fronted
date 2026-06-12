import React from "react";
function RImage({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="container  border-top" style={{ height: "476.8px" }}>
      <div className="row mt-5">
        <div className="col-6 p-5">
          <h1>{productName}</h1>
          <p className="text-muted mt-3  pb-3" style={{ width: "80%" }}>
            {productDescription}
          </p>
          <div className="mt-3 pb-2 ">
            <a href={learnMore} style={{ textDecoration: "none" }}>
              learnMore&nbsp;<i class="fa fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-6 ">
          <img src={imageURL} alt="img" style={{ height: "420px" }}></img>
        </div>
      </div>
    </div>
  );
}

export default RImage;
