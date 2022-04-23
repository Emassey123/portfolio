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
              <li>HTML</li>
              <li>CSS</li>
              <li>REACT</li>
            </ul>
          </section>
          <section className="skill-wrapper">
            <h1 className="skills-title">Back End</h1>
            <ul className="skills-list">
              <li>NodeJS</li>
              <li>MySQL</li>
              <li>API</li>
              <li>JavaScript</li>
            </ul>
          </section>
          <section className="skill-wrapper">
            <h1 className="skills-title">Tools</h1>
            <ul className="skills-list">
              <li>VS Code</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>Marvel</li>
            </ul>
          </section>
          <section className="skill-wrapper">
            <h1 className="skills-title">Future Technology/Languages</h1>
            <ul className="skills-list">
              <li>Java</li>
              <li>Spring Boot</li>
              <li>AWS</li>
            </ul>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Skills;
