import React from "react";
import "./Components.css";

export default function Inquiry() {
  return (
    <div className="Inquiry d-sm-flex justify-content-between align-items-center">
      <div>
        <h2 className="mb-3">WORK INQUIRY</h2>
        <p className="mt-3 mb-0">LET'S WORK TOGETHER</p>
      </div>
      <div className="mt-4 mt-sm-0">
        <a
          href="/contact"
          className="btn project-button"
          title="Contact Selene Roa"
        >
          CONTACT ME
        </a>
      </div>
    </div>
  );
}
