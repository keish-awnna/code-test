import React from "react";
import Trolly from "../../../../assets/trolly-carousel.png";
import Bike from "../../../../assets/bike-top-carousel.png";
import LeftMyHeart from "../../../../assets/left-my-heart-in-sf.png";

const TopCarousel = () => {
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
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img className="d-block w-100" src={Trolly} alt="First slide" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img className="d-block w-100" src={Bike} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={LeftMyHeart}
              alt="Third slide"
            />
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

export default TopCarousel;
