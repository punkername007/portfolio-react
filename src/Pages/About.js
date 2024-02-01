import React from "react";
import "./About.css";
import avatar from "../Imagen de WhatsApp 2023-11-03 a las 21.11.40_3aeaa120.jpg";
import ContactInfo from "../Components/ContactInfo";
import Footer from "../Components/Footer";

export default function About() {
  return (
    <div className="About">
      <div className="container info-container">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <img src={avatar} alt="Image of Selene Roa" className="img-fluid" />
          </div>
          <div className="col-sm-6">
            <h1>SELENE ROA</h1>
            <h2>FRONT-END DEVELOPER BASED IN EUROPE</h2>
            <p className="pt-3 pb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              iusto eligendi, maiores, consequatur ab, dolores corporis ratione
              excepturi repudiandae fugiat voluptatibus animi beatae adipisci
              officiis fuga doloribus expedita maxime doloremque.
            </p>
            <a
              href="/contact"
              className="project-button"
              title="Contact Selene Roa"
            >
              CONTACT ME
            </a>
          </div>
        </div>
      </div>
      <footer>
        <ContactInfo />
      </footer>
      <Footer />
    </div>
  );
}
