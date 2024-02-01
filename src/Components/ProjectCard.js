import React from "react";
import "./Components.css";
import "../Pages/styles/About.css";

export default function ProjectCard(props) {
  if (props.index % 2 === 0) {
    return (
      <div className="ProjectCard container-fluid info-container">
        <div className="row align-items-center justify-content-evenly p-2">
          <div className="col-md-6">
            <h3 className="card-title">{props.data.projectTitle}</h3>
            <p className="pt-3 pb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit id iste saepe ipsum adipisci magnam soluta aliquid
              dignissimos vel a quibusdam dolorum, quam praesentium atque, eum
              facilis itaque suscipit maxime?
            </p>
            <div className="row button-row">
              <a
                href={props.data.projectSrc}
                target="_blank"
                rel="noreferrer"
                title="Open in browser"
                className="col-6 col-sm me-3 project-button text-center"
              >
                ONLINE APP
              </a>
              <a
                href={props.data.projectRepoSrc}
                target="_blank"
                rel="noreferrer"
                title="Open Repository"
                className="col-6 col-sm ms-3 project-button text-center"
              >
                GITHUB
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src={props.data.projectImg}
              alt={props.data.imageAlt}
              className="img-fluid mt-3 mt-md-0"
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ProjectCard container-fluid info-container">
        <div className="row align-items-center justify-content-evenly p-2">
          <div className="col-md-6">
            <img
              src={props.data.projectImg}
              alt={props.data.imageAlt}
              className="img-fluid mt-3 mt-md-0"
            />
          </div>
          <div className="col-md-6">
            <h3 className="card-title">{props.data.projectTitle}</h3>
            <p className="pt-3 pb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit id iste saepe ipsum adipisci magnam soluta aliquid
              dignissimos vel a quibusdam dolorum, quam praesentium atque, eum
              facilis itaque suscipit maxime?
            </p>
            <div className="row button-row">
              <a
                href={props.data.projectSrc}
                target="_blank"
                rel="noreferrer"
                title="Open in browser"
                className="col-6 col-sm me-3 project-button text-center"
              >
                ONLINE APP
              </a>
              <a
                href={props.data.projectRepoSrc}
                target="_blank"
                rel="noreferrer"
                title="Open Repository"
                className="col-6 col-sm ms-3 project-button text-center"
              >
                GITHUB
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
