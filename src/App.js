import React, {
  useRef,
  useEffect,
  useState,
  createContext,
  useContext,
} from "react";
import "./styles/index.scss";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import LocomotiveScroll from "locomotive-scroll";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

export const ScrollContext = createContext();

function App() {
  const scrollRef = useRef(null);
  const [scrollManager, setScrollManager] = useState(null);

  useEffect(() => {
    window.addEventListener("load", () => {
      const scroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        smoothMobile: true,
        multiplier: 0.75,
        scrollFromAnywhere: true,
        lerp: 0.045,
      });

      setScrollManager(scroll);
      setTimeout(() => {
        scroll.update();
      }, 500);
    });
  }, []);
  return (
    <ScrollContext.Provider value={scrollManager}>
      <LocomotiveScrollProvider containerRef={scrollRef}>
        <main data-scroll-container ref={scrollRef} id="main-app-wrapper">
          <div className="App">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </BrowserRouter>
          </div>
        </main>
      </LocomotiveScrollProvider>
    </ScrollContext.Provider>
  );
}

export default App;
