import React, { useRef, useEffect } from "react";
import "./styles/index.scss";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import LocomotiveScroll from "locomotive-scroll";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

function App() {
  const scrollRef = useRef(null);

  window.addEventListener("load", () => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      smoothMobile: true,
      multiplier: 0.75,
      scrollFromAnywhere: true,
      lerp: 0.05,
    });
    setTimeout(() => {
      scroll.update();
    }, 5000);
  });

  // useEffect(() => {
  //   new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //     // smoothMobile: true,
  //     // resetNativeScroll: true,
  //     // lerp: 0.05,
  //   });
  // });
  return (
    <LocomotiveScrollProvider containerRef={scrollRef}>
      <main data-scroll-container ref={scrollRef}>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home data-scroll-section />} />
            </Routes>
          </BrowserRouter>
        </div>
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
