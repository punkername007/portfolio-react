import React from "react";
import "../Pages/styles/Home.css";
import "../Components/Components.css";
import ProjectCard from "../Components/ProjectCard";
import projects from "../Projects.json";
import Inquiry from "../Components/Inquiry";
import ContactInfo from "../Components/ContactInfo";
import Footer from "../Components/Footer";

export default function Work() {
  return (
    <div className="Work">
      <div className="secondary-heading">PROJECTS GALLERY</div>
      <main className="main-container ">
        {projects.projects.map(function (element, index) {
          return <ProjectCard data={element} key={index} index={index} />;
        })}
        <Inquiry />
      </main>
      <footer>
        <ContactInfo />
      </footer>
      <Footer />
    </div>
  );
}
