import React from "react";
import "./Components.css";

export default function Inquiry() {
  return (
    <div className="Inquiry">
      <div>
        <h2 className="mb-3">do you like my work?</h2>
        <p className="mt-3">let's work together</p>
      </div>
      <div className="mt-4">
        <a
          href="/contact"
          className=" project-button"
          title="Contact Selene Roa"
        >
          CONTACT ME
        </a>
      </div>
    </div>
  );
}
