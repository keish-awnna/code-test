import React from "react";
import BottomHero from "../ui/molecules/BottomHero";
import Contact from "../ui/molecules/Contact";
import FeatureCards from "../ui/molecules/FeatureCards";
import Gallery from "../ui/molecules/Gallery";
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
      <Gallery />
      <BottomHero />
      <Contact />
    </div>
  );
};

export default Home;
