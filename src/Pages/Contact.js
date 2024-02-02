import React from "react";
import "./styles/Home.css";
import Footer from "../Components/Footer";
import ContactInfo from "../Components/ContactInfo";

export default function Contact() {
  return (
    <div className="Contact">
      <h2>Do you like my work? Let's work together</h2>
      <ContactInfo details={true} />
      <Footer />
    </div>
  );
}
