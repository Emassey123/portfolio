import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <section className="skills">
        <h1 className="main-heading">Skills</h1>
        <section className="skills-grid">
          <section className="skill-wrapper">
            <h1 className="skills-title">Front End</h1>
            <ul className="skills-list">
              <li>
                <p>HTML</p>
              </li>
              <li>
                <p>CSS</p>
              </li>
              <li>
                <p>REACT</p>
              </li>
            </ul>
          </section>
          <section className="skill-wrapper">
            <h1 className="skills-title">Back End</h1>
            <ul className="skills-list">
              <li>
                <p>NodeJS</p>
              </li>
              <li>
                <p>MySQL</p>
              </li>
              <li>
                <p>API</p>
              </li>
              <li>
                <p>JavaScript</p>
              </li>
            </ul>
          </section>
          <section className="skill-wrapper">
            <h1 className="skills-title">Tools</h1>
            <ul className="skills-list">
              <li>
                <p>VS Code</p>
              </li>
              <li>
                <p>Git</p>
              </li>
              <li>
                <p>GitHub</p>
              </li>
              <li>
                <p>Marvel</p>
              </li>
            </ul>
          </section>
          <section className="skill-wrapper">
            <h1 className="skills-title">Future Skills</h1>
            <ul className="skills-list">
              <li>
                <p>Java</p>
              </li>
              <li>
                <p>Spring Boot</p>
              </li>
              <li>
                <p>AWS</p>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Skills;
