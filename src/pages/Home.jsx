import React from "react";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Gallery from "../components/Gallery";
import HomeDesign from "../components/HomeDesign";
import VideoComp from "../components/VideoComp";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

function Home() {
  return (
    <div>
      <Hero />

      <Reveal direction="up">
        <Feature />
      </Reveal>

      <Reveal direction="left" delay={0.1}>
        <Gallery />
      </Reveal>

      <Reveal direction="right" delay={0.2}>
        <HomeDesign />
      </Reveal>

      <Reveal direction="up" delay={0.3}>
        <VideoComp />
      </Reveal>

      <Reveal direction="up" delay={0.4}>
        <Contact />
      </Reveal>

      <Reveal direction="up" delay={0.5}>
        <Footer />
      </Reveal>
    </div>
  );
}

export default Home;
