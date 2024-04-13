import React from "react";
import "./styles/About.css";
import avatar from "../Imagen de WhatsApp 2023-11-03 a las 21.11.40_3aeaa120.jpg";
import ContactInfo from "../Components/ContactInfo";
import Footer from "../Components/Footer";

export default function About() {
  return (
    <div className="About">
      <div className="container info-container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <img src={avatar} alt="Selene Roa" className="img-fluid" />
          </div>
          <div className="col-lg-8">
            <h1 className="mt-4 mt-ms-none">SELENE ROA</h1>
            <h2>FRONT-END DEVELOPER BASED IN EUROPE</h2>
            <p className="pt-2 pb-3">
              Hi! I am Selene, a front-end developer originally from Argentina.
              I am currently traveling around Europe since I began a long
              journey to know and experience life beyond my country of origin.
              During the hard times of COVID, I got interested in programming in
              order to be able to create applications. For a few years now,
              studying programming and building applications has been part of my
              daily life (Just like good music and a cup of coffee). I enjoy
              building applications while learning to communicate with my travel
              companion (💻❤️), since in short, she builds everything I develope
              in my head. I currently aspire to become a full stack developer
              and i'm glad that traveling doesn't stop me from learning. It
              keeps me motivated to improve as a developer. If you are
              interested in my work, feel free to contact me, i will be glad to
              work together.
            </p>
            <a
              href="/contact"
              className="project-button"
              title="Contact Selene Roa"
            >
              CONTACT SELENE
            </a>
          </div>
        </div>
      </div>
      <footer>
        <ContactInfo details={false} />
      </footer>
      <Footer />
    </div>
  );
}
