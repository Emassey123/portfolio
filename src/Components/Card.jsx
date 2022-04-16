import React from "react";
import "./Card.scss";
const Card = ({ Data }) => {
  return (
    <section>
      {Data.map((project) => {
        return (
          <div className="card-wrapper" key={project.id}>
            <hr />
            <div className="card-heading">
              <h1 className="card-name">{project.name}</h1>
              <p className="card-date">{project.date}</p>
            </div>
            <div className="card-image-wrapper">
              <div
                className={`desktop-image-wrapper desktop-image-${project.id}`}
              >
                <img
                  className="desktop-image"
                  src={project.image}
                  alt={project.name}
                />
              </div>
              {project.mobile_image ? (
                <div className="mobile-image-wrapper">
                  <div className="mobile-image">
                    <img
                      className="mobile-overlay"
                      src={project.mobile_image}
                      alt={project.name}
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="card-description">
              <div className="card-body">
                <h1 className="card-body-heading">Background:</h1>
                <p>{project.purpose}</p>
                <h1 className="card-body-heading">Focus Point:</h1>
                <p>{project.keypoint}</p>
              </div>
              <div className="card-footer">
                <h1 className="card-body-heading">Skills:</h1>
                <h3 className="card-skills">{project.skills}</h3>
                <div className="button-group">
                  <button className="github-button">
                    <a href={project.github} className="button-link">
                      View GitHub
                    </a>
                  </button>
                  <button className="website-button">
                    <a href={project.link} className="button-link">
                      View Website
                    </a>
                  </button>
                </div>
                <hr></hr>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Card;
