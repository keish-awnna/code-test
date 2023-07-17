import React from "react";

const Jumbotron = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="jumbo-content-wrapper">
        <div className="tag-line-content">
          <h3 className="tag-line">
            Experience the Best of San Francisco Living at
          </h3>
          <h1 className="main-header">Chancellor</h1>
          <h3 className="tag-line">Luxury Apartment Homes</h3>
          <button className="cta-btn">View Floor Plans</button>
        </div>
        {/* <div className="call-to-action">
          <button className="cta-btn">View Floor Plans</button>
        </div> */}
      </div>
    </div>
  );
};

export default Jumbotron;
