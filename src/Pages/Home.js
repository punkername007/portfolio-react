import React from "react";
import "../Pages/styles/Home.css";
import HomepageCard from "../Components/HomepageCard";
import projects from "../Projects.json";
import ContactInfo from "../Components/ContactInfo";
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
              return <HomepageCard data={element} key={index} />;
            } else {
              return null;
            }
          })}
        </div>
        <div className="d-flex justify-content-end mt-4">
          <a href="/work" title="See list" className="project-button">
            See full list of projects →
          </a>
        </div>
      </main>
      <footer>
        <ContactInfo details={false} />
      </footer>
      <Footer />
    </div>
  );
}
