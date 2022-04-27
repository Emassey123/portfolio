import React from "react";
import "./Card.css";
const Card = ({ Data }) => {
  return (
    <section className="portfolio-section" id="portfolio">
      {/* <section className="card-wrapper"> */}
      <h1 className="main-heading">My Projects</h1>
      <section className="card-grid">
        {Data.map((project) => {
          return (
            <div className="card-wrapper" key={project.id}>
              <div className="card-heading">
                <h1 className="card-name">{project.name}</h1>
                <p className="card-date">{project.date}</p>
              </div>
              <div className="card-image-wrapper">
                <div className="desktop-image">
                  <img
                    className="desktop-image"
                    src={project.image}
                    alt={project.name}
                  />
                </div>
              </div>

              <div className="card-footer">
                <h1 className="card-footer-heading">Skills:</h1>
                <p className="card-skills">{project.skills}</p>
                <div className="button-group">
                  <button className="github-button">
                    <a
                      href={project.github}
                      target="_blank"
                      className="button-link"
                    >
                      View GitHub
                    </a>
                  </button>
                  {project.link ? (
                    <button className="website-button">
                      <a
                        href={project.link}
                        target="_blank"
                        className="button-link"
                      >
                        View Website
                      </a>
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </section>
      {/* </section> */}
    </section>
  );
};

export default Card;
