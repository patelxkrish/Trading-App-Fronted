import React from "react";
function LImage({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  appStore,
  googlePlay,
}) {
  return (
    <div
      style={{ height: "476.8px" }}
      className="container mt-5 mb-5 pt-2 border-top"
    >
      <div className="row mt-5">
        <div className="col-6 ">
          <img src={imageURL} alt="img" style={{ height: "420px" }}></img>
        </div>
        <div className="col-6 p-5">
          <h1>{productName}</h1>
          <p className="text-muted mt-3  pb-3" style={{ width: "80%" }}>
            {productDescription}
          </p>
          <div className="mt-3 pb-2 ">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              tryDemo&nbsp;<i class="fa fa-long-arrow-right"></i>
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "50px", textDecoration: "none" }}
            >
              learnMore&nbsp;<i class="fa fa-long-arrow-right"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={appStore}>
              <img src="assets/appstoreBadge.svg" alt="" />
            </a>
            <a href={googlePlay} style={{ marginLeft: "50px" }}>
              <img src="assets/googlePlayBadge.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LImage;
