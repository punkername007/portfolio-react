import React from "react";
import { Card } from "react-bootstrap";
import "./Components.css";

export default function ProjectCard(props) {
  return (
    <div className="Project Card col p-3">
      <Card className="p-3">
        <Card.Img
          variant="top"
          src={props.data.projectImg}
          alt="image"
          className=" d-none d-lg-block p-2 rounded-4"
        />
        <Card.Body>
          <Card.Title className="card-title">
            {props.data.projectTitle}
          </Card.Title>
          <Card.Text className="card-text">
            {props.data.projectDescription}
          </Card.Text>
          <div className="mt-4">
            <a
              href="/work"
              title={props.data.projectTitle}
              className=" project-button"
            >
              LEARN MORE
            </a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
