import React, { useEffect, useState, useRef } from "react";

const initialState = {
  sticky: "",
  topNavHeight: 0,
  isOpen: false,
  true: false,
  clicked: "0",
};

const NavBar = () => {
  const [state, setState] = useState(initialState);
  const [active, setActive] = useState(null);

  const topNavRef = useRef(null);

  const handleScroll = () => {
    if (topNavRef.current) {
      if (state.isOpen) {
        return;
      }
      const scrollTop = window.scrollY;

      if (scrollTop > 40 && !state.sticky.length) {
        setState({ ...state, sticky: "is-sticky" });
      }

      if (scrollTop + 40 <= 40 && state.sticky.length) {
        setState({ ...state, sticky: "" });
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
    if (topNavRef.current) {
      setState({ ...state, topNavHeight: topNavRef.current.offsetHeight });
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    console.log("isOpen", state.isOpen);
  }, [state.sticky, topNavRef, state.isOpen]);

  const handleToggle = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };
  return (
    <nav className={`navigation-wrapper ${state.sticky}`}>
      <div className="top-navbar" ref={topNavRef}>
        <div className="container">
          <div className="row">
            <div className="col">top nav</div>
          </div>
        </div>
      </div>
      {/* <div className="bottom-navbar">
        <div className="container">
          <div className="row">
            <div className="col">bottom nav</div>
          </div>
        </div>
      </div> */}
    </nav>
  );
};

export default NavBar;
