import React from "react";
import "./Navigation.css";
import { NavLink, Outlet } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export default function Navigation() {
  return (
    <div className="Navigation ">
      <Navbar expand="lg" variant="dark" fixed="top" className="navbar">
        <Navbar.Brand href="/" className="ms-4 navbar-brand">
          &lt; <b>SR/</b>&gt;
        </Navbar.Brand>
        <Navbar.Toggle className="me-4" />
        <Navbar.Collapse className="ps-5 collapse ">
          <Nav className="navbar-links ms-auto me-4">
            <NavLink to="/" className="me-4">
              Home
            </NavLink>
            <NavLink to="/about" className="me-4">
              About
            </NavLink>
            <NavLink to="/work" className="me-4">
              Work
            </NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
