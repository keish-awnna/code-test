import React from "react";
import Gateway from "../../../../assets/gateway.png";
import Tailored from "../../../../assets/tailored.png";
import Amenities from "../../../../assets/amenities.png";

const FeatureCards = () => {
  return (
    <section className="feature-cards-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="feature-content feat-one">
              <h3 className="feature-title left">Unparalleled Amenities</h3>
              <div className="feature-description-wrapper">
                <p className="feature-description-left">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minus distinctio quisquam ut omnis perferendis aliquam rerum,
                  sed inventore cumque reprehenderit. Alias accusamus eveniet
                  illo amet!
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
          <div className="col-12">
            <div className="feature-content feat-two">
              <div className="feature-img-left">
                <img
                  src={Tailored}
                  className="rounded"
                  alt="Tailored to Perfection"
                />
              </div>
              <div className="feature-description-wrapper right">
                <p className="feature-description-right">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  veniam culpa aperiam autem nemo debitis laudantium deserunt
                  soluta amet quasi voluptate sequi, quidem doloremque dolorem.
                </p>
                <button className="cta-btn">Floor Plans</button>
              </div>
              <h3 className="feature-title right">Tailored to Perfection</h3>
            </div>
          </div>
          <div className="col-12">
            <div className="feature-content feat-two">
              <h3 className="feature-title left">Gateway to San Francisco</h3>
              <div className="feature-description-wrapper">
                <p className="feature-description-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  et aperiam mollitia voluptatum pariatur omnis rerum,
                  blanditiis deserunt enim, porro magnam laboriosam illo
                  ratione.
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
