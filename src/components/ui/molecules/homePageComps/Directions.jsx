import React from "react";
import TrollyFog from "../../../../assets/trolly-fog.png";

const Directions = () => {
  return (
    <div className="directions-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="directions-info">
              <h3 className="directions-title">
                Iconic Journeys Begin: Hop on the Trolley to Explore San
                Francisco
              </h3>
              <button className="cta-btn">See the Neighborhood</button>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="directions-image-wrapper">
              <img
                src={TrollyFog}
                className="rounded directions-image"
                alt="Market Street Trolly"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directions;
