import React from "react";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="top-footer-content">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <div className="footer-col-one">
                <h4 className="footer-logo">Chancellor</h4>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="footer-col-two">
                <p className="contact-info">1234 Market Street</p>
                <p className="contact-info">San Francisco, CA</p>
                <p className="contact-info">888-555-7777</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="footer-col-three">
                <div className="lease-link-box">
                  <button className="cta-btn">Lease Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer-content">
        <div className="row">
          <div className="col-md-12">
            <div className="bottom-footer-col-one">
              &copy; Gradient Ascent {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
