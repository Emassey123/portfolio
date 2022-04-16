import React from "react";
import Data from "../project.json";
import Card from "./Card";
import "./Home.scss";
const Home = () => {
  return (
    <section>
      {/* {Data.map((project) => {
        return (
          <div key={project.id}>
            <img src={project.image} alt="" />
          </div>
        );
      })} */}
      <section className="home-section-flex">
        <img
          className="headshot-image"
          src="./images/headshot1.png"
          alt="headshot"
        />
        <div className="typing">
          <p>Learner : true,</p>
          <p>Creator : true,</p>
          <p>Developer : true</p>
        </div>
      </section>
      <Card Data={Data} />
    </section>
  );
};

export default Home;
