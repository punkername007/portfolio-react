import React from "react";
import { Card } from "react-bootstrap";
import "./Components.css";

export default function ProjectCard(props) {
  return (
    <div className="ProjectCard col p-3">
      <Card>
        <Card.Img
          variant="top"
          src={props.data.projectImg}
          alt="image"
          className=" d-none d-lg-block card-img"
        />
        <Card.Body>
          <Card.Title className="card-title">
            {props.data.projectTitle}
          </Card.Title>
          <Card.Text className="card-text">
            {props.data.projectDescription}
          </Card.Text>
        </Card.Body>

        <div className="ms-3 mb-4 mt-4">
          <a
            href="/work"
            title={props.data.projectTitle}
            className=" project-button"
          >
            LEARN MORE
          </a>
        </div>
      </Card>
    </div>
  );
}
