import React from "react";
import Hero from "../ui/molecules/Hero";
import Jumbotron from "../ui/molecules/Jumbotron";
import NavBar from "../ui/molecules/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Jumbotron />
      <Hero />
    </div>
  );
};

export default Home;
