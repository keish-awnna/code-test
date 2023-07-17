import React from "react";
import Bedroom from "../../../../assets/bedroom.png";
import Kitchen from "../../../../assets/kitchen.png";
import RedChair from "../../../../assets/red-chair-living-rm.png";
import Apartment from "../../../../assets/apartment.jpg";

const HeroCarousel = () => {
  return (
    <section className="carousel-wrapper">
      <div id="carouselIndicators" class="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#carouselIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselIndicators" data-slide-to="1"></li>
          <li data-target="#carouselIndicators" data-slide-to="2"></li>
          <li data-target="#carouselIndicators" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img className="d-block w-100" src={Bedroom} alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>My Caption Title (1st Image)</h5>
              <p>
                The whole caption will only show up if the screen is at least
                medium size.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img className="d-block w-100" src={RedChair} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Kitchen} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Apartment} alt="Fourth slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
};

export default HeroCarousel;
