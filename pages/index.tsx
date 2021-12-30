import type { NextPage } from "next";
import Carousel from "../components/Carousel/Carousel";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Features />
    </>
  );
};

export default Home;
