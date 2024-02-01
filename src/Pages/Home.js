import React from "react";
import "../Pages/styles/Home.css";
import ProjectCard from "../Components/Card";
import projects from "../Projects.json";
import ContactInfo from "../Components/ContactInfo";
import Inquiry from "../Components/Inquiry";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div className="Home">
      <header className="container-fluid hero-container">
        <div className="row align-items-center">
          <h1 className="col-lg-6">Selene Roa</h1>
          <h2 className="col-lg-6 text-lg-end">front-end developer</h2>
        </div>
      </header>

      <div class="secondary-heading">LATEST PROJECTS</div>
      <main className="container-fluid main-container">
        <div className="row d-block d-lg-flex justify-content-around">
          {projects.projects.map(function (element, index) {
            if (index >= projects.projects.length - 3) {
              return <ProjectCard data={element} key={index} />;
            } else {
              return null;
            }
          })}
        </div>
        <Inquiry />
      </main>
      <footer>
        <ContactInfo />
      </footer>
      <Footer />
    </div>
  );
}
