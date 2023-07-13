import React from "react";

const NavBar = () => {
  return (
    <nav className="navigation-wrapper">
      <div className="top-navbar">
        <div className="container">
          <div className="row">
            <div className="col">top nav</div>
          </div>
        </div>
      </div>
      <div className="bottom-navbar">
        <div className="container">
          <div className="row">
            <div className="col">bottom nav</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
