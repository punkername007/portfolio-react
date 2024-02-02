import React from "react";
import "./Components.css";

export default function ProjectCard(props) {
  if (props.index % 2 === 0) {
    return (
      <div className="ProjectCard container-fluid">
        <div className="row align-items-center justify-content-between p-3">
          <div className="col-md-6 p-5">
            <h3 className="card-title">{props.data.projectTitle}</h3>
            <p className="pt-3 pb-3">{props.data.projectDescription}</p>
            <div className="row button-row">
              <a
                href={props.data.projectSrc}
                target="_blank"
                rel="noreferrer"
                title="Open in browser"
                className="col-sm me-3 project-button "
              >
                ONLINE APP
              </a>
              <a
                href={props.data.projectRepoSrc}
                target="_blank"
                rel="noreferrer"
                title="Open Repository"
                className="col-sm ms-3 project-button"
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
      <div className="ProjectCard container-fluid">
        <div className="row align-items-center justify-content-between p-3">
          <div className="col-md-6">
            <img
              src={props.data.projectImg}
              alt={props.data.imageAlt}
              className="img-fluid mb-3 mb-md-0"
            />
          </div>
          <div className="col-md-6 p-5">
            <h3 className="card-title">{props.data.projectTitle}</h3>
            <p className="pt-3 pb-3">{props.data.projectDescription}</p>
            <div className="row button-row">
              <a
                href={props.data.projectSrc}
                target="_blank"
                rel="noreferrer"
                title="Open in browser"
                className="col-sm me-3 project-button text-center"
              >
                ONLINE APP
              </a>
              <a
                href={props.data.projectRepoSrc}
                target="_blank"
                rel="noreferrer"
                title="Open Repository"
                className="col-sm ms-3 project-button text-center"
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
