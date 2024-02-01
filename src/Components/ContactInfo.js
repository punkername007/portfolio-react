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
          >
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </a>
        </div>
        <div className="col">
          <a
            href="mailto:roapcselene.test@gmail.com"
            title="roapcselene.test@gmail.com"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
        </div>
        <div className="col">
          <a
            href="mailto:roapcselene.test@gmail.com"
            title="roapcselene.test@gmail.com"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
