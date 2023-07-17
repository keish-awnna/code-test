import React from "react";
import Gateway from "../../../../assets/gateway.png";
import Tailored from "../../../../assets/tailored.png";
import Amenities from "../../../../assets/amenities.png";

const FeatureCards = () => {
  return (
    <section className="feature-cards-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="feature-content">
              <h3 className="feature-title left">Unparalleled Amenities</h3>
              <div className="feature-description-wrapper">
                <p className="feature-description left">
                  Indulge in a life of unparalleled luxury and sophistication at
                  Chancellor Apartments. With our exceptional amenities and
                  elegant residences, your lifestyle will be elevated to new
                  heights of comfort and refinement.
                </p>
                <button className="cta-btn">Amenities</button>
              </div>
              <div className="feature-img-right">
                <img
                  src={Amenities}
                  className="rounded"
                  alt="Unparalleled Amenities"
                />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="feature-content">
              <div className="feature-img-left">
                <img
                  src={Tailored}
                  className="rounded"
                  alt="Tailored to Perfection"
                />
              </div>
              <div className="feature-description-wrapper right">
                <p className="feature-description-right">
                  Chancellor Apartments offers spacious floor plans thoughtfully
                  designed to meet the needs of new families and young
                  professionals. Experience the perfect balance of functionality
                  and style, tailored to accommodate your evolving lifestyle
                  with ease and elegance.
                </p>
                <button className="cta-btn">Floor Plans</button>
              </div>
              <h3 className="feature-title right">Tailored to Perfection</h3>
            </div>
          </div>
          <div className="col-md-12">
            <div className="feature-content">
              <h3 className="feature-title left">Gateway to San Francisco</h3>
              <div className="feature-description-wrapper">
                <p className="feature-description left">
                  As the gateway to San Francisco, Chancellor Apartments not
                  only grants you easy access to the city's charms but also puts
                  you within reach of invigorating hikes and thrilling bike
                  rides for an active and adventurous lifestyle.
                </p>

                <button className="cta-btn">Schedule A Tour</button>
              </div>
              <div className="feature-img-right">
                <img
                  src={Gateway}
                  className="rounded"
                  alt="Gateway to San Francisco"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
