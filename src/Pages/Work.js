import React from "react";
import "../Pages/styles/Home.css";
import "../Components/Components.css";
import ProjectCard from "../Components/ProjectCard";
import projects from "../Projects.json";

import ContactInfo from "../Components/ContactInfo";
import Footer from "../Components/Footer";

export default function Work() {
  return (
    <div className="Work">
      <header className="container-fluid hero-container">
        <h1>Projects</h1>
      </header>
      <div className="secondary-heading mb-4">PROJECTS GALLERY</div>
      <main>
        {projects.projects.map(function (element, index) {
          return <ProjectCard data={element} key={index} index={index} />;
        })}
      </main>
      <footer>
        <ContactInfo details={false} />
      </footer>
      <Footer />
    </div>
  );
}
