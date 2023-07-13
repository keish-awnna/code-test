import React from "react";
import FeatureCards from "../ui/molecules/FeatureCards";
import Hero from "../ui/molecules/Hero";
import HeroCarousel from "../ui/molecules/HeroCarousel";
import Jumbotron from "../ui/molecules/Jumbotron";
import NavBar from "../ui/molecules/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Jumbotron />
      <Hero />
      <HeroCarousel />
      <FeatureCards />
    </div>
  );
};

export default Home;
