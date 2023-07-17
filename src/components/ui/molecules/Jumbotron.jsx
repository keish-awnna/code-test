import React from "react";

const Jumbotron = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="jumbo-content-wrapper">
        <div className="tag-line-content">
          <h3 className="tag-line">
            Experience the Best of San Francisco Living at
          </h3>
          <h1 className="display-4">Chancellor Apartments</h1>
          {/* <h3 className="lead">in San Francisco</h3> */}
        </div>
        {/* <div className="call-to-action">
          <h3 className="cta-title">View Floor Plans</h3>
        </div> */}
      </div>
    </div>
  );
};

export default Jumbotron;
