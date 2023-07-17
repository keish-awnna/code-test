import React from "react";
import BottomHero from "../ui/molecules/homePageComps/BottomHero";
import Contact from "../ui/molecules/homePageComps/Contact";
import FeatureCards from "../ui/molecules/homePageComps/FeatureCards";
import Gallery from "../ui/molecules/homePageComps/Gallery";
import Hero from "../ui/molecules/homePageComps/Hero";
import HeroCarousel from "../ui/molecules/homePageComps/HeroCarousel";
import Jumbotron from "../ui/molecules/homePageComps/Jumbotron";
import NavBar from "../ui/molecules/globalLayout/NavBar";
import Footer from "../ui/molecules/globalLayout/Footer";

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
      <Footer />
    </div>
  );
};

export default Home;
