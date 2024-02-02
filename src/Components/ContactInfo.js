import React from "react";
import "./Components.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function ContactInfo() {
  return (
    <div className="ContactInfo">
      <div className="row">
        <div className="col">
          <a
            href="mailto:roapcselene.test@gmail.com"
            title="roapcselene.test@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </a>
        </div>
        <div className="col">
          <a
            href="https://github.com/punkername007/?tab=repositories"
            title="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
        </div>
        <div className="col">
          <a
            href="https://www.linkedin.com/in/selene-roa-7092801b8/"
            title="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
