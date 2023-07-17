import React from "react";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="top-footer-content">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <div className="footer-col-one">column one</div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="footer-col-two">column two</div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="footer-col-three">column three</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer-content">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <div className="bottom-footer-col-one">bottom column one</div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="bottom-footer-col-two">bottom column two</div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="bottom-footer-col-three">bottom column three</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
