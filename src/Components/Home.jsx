import React from "react";
import Data from "../project.json";
import Skills from "./Skills";
import Card from "./Card";
import Form from "./Form";
import Hero from "./Hero";
import About from "./About";
const Home = () => {
  return (
    <section>
      <Hero />
      <About />
      <Skills />
      <Card Data={Data} />
      <Form />
    </section>
  );
};

export default Home;
