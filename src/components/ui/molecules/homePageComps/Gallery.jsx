import React from "react";

const Gallery = () => {
  return (
    <section className="gallery-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <div className="photo-short"></div>
            <div className="photo-tall"></div>
          </div>
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <div className="photo-tall"></div>
            <div className="photo-short"></div>
          </div>
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <div className="photo-short"></div>
            <div className="photo-tall"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
