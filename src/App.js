import React, { useRef, useEffect } from "react";
import "./styles/index.scss";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import LocomotiveScroll from "locomotive-scroll";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
  });
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
