import "./styles/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      heeeeeey
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="services" element={<Services />} />
        <Route path="work" element={<Work />} /> */}
        </Routes>

        {/* <AnimateRoutes /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
