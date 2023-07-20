import React from "react";
import BottomHero from "../ui/molecules/homePageComps/BottomHero";
import Directions from "../ui/molecules/homePageComps/Directions";
import FeatureCards from "../ui/molecules/homePageComps/FeatureCards";
import Hero from "../ui/molecules/homePageComps/Hero";
import HeroCarousel from "../ui/molecules/homePageComps/HeroCarousel";
import Jumbotron from "../ui/molecules/homePageComps/Jumbotron";
import NavBar from "../ui/molecules/globalLayout/NavBar";
import Footer from "../ui/molecules/globalLayout/Footer";
import BottomCarousel from "../ui/molecules/homePageComps/BottomCarousel";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Jumbotron />

      <Hero />
      <HeroCarousel />
      <FeatureCards />
      <BottomHero />
      <Directions />
      {/* <BottomCarousel /> */}
      <Footer />
    </div>
  );
};

export default Home;
