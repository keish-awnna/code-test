import React, { useEffect, useState, useRef } from "react";

const initialState = {
  animatedHeader: "",
  navHeight: 0,
  isOpen: false,
  true: false,
  clicked: "0",
};

const NavBar = () => {
  const [state, setState] = useState(initialState);
  const [active, setActive] = useState(null);

  const navRef = useRef(null);

  const handleScroll = () => {
    if (navRef.current) {
      if (state.isOpen) {
        return;
      }
      const scrollTop = window.scrollY;

      if (window.scrollY > 50) {
        setState({ ...state, animatedHeader: "animated-header" });
      } else {
        setState({ ...state, animatedHeader: "" });
      }
    }
  };
  useEffect(() => {
    console.log("isOpen", state.isOpen);
    const body = document.getElementsByTagName("body")[0];

    if (state.isOpen) {
      console.log(body);

      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "scroll";
    }
  }, [state.isOpen]);

  useEffect(() => {
    if (navRef.current) {
      setState({ ...state, navHeight: navRef.current.offsetHeight });
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    console.log("isOpen", state.isOpen);
  }, [state.animatedHeader, navRef, state.isOpen]);

  const handleToggle = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };
  return (
    <nav className="navigation-wrapper">
      <div className={`navbar ${state.animatedHeader}`} ref={navRef}>
        <div className="container">
          <div className="navbar-content-wrapper">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="left-side-content">Chancellor</div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="right-side-content">
                  <button
                    onClick={() =>
                      setState({ ...state, isOpen: !state.isOpen })
                    }
                    id="nav-icon"
                    className={`hamburger-menu ${
                      state.isOpen ? "open" : "close"
                    }`}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`panel ${state.isOpen ? "open" : "close"}`}>
        <div className="container">
          <div className="nav-links-wrapper">
            <div className="col-lg-12 col-sm-12">
              <div className="nav-column">
                <ul>
                  <li className="nav-links">
                    <a href="url">Apply Now</a>
                  </li>
                  <li className="nav-links">
                    <a href="url">Schedule a Tour</a>
                  </li>
                  <li className="nav-links">
                    <a href="url">Gallery</a>
                  </li>
                  <li className="nav-links">
                    <a href="url">Floor Plans</a>
                  </li>
                  <li className="nav-links">
                    <a href="url">Features</a>
                  </li>
                  <li className="nav-links">
                    <a href="url">Amenities</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
