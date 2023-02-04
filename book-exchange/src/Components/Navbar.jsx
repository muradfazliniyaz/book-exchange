import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../images/book-exchange-logo.jpeg";


function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
        <div className="navbar-div">
            <img src={logo} alt="" />
            <div>
            <label htmlFor="input-search"></label>
            <input type="search" name="search" id="search" className="search-field" placeholder="Title, Author, Keyword, ISBN, User"/>
            <button type="submit" className="nav-button">Search</button>
            </div>
            <button type="login" className="nav-button" >Login</button>
        </div>
      <Nav className="navbar-container">
        <NavItem>
          <Link className="nav-button" to="/">HOME</Link>
        </NavItem>
        <NavItem>
          <Link className="nav-button" to="/About">ABOUT</Link>
        </NavItem>
        <NavItem>
          <Link className="nav-button" to="/Books">BOOKS</Link>
        </NavItem>
        <NavItem>
          <Link className="nav-button" to="/Contact">CONTACT</Link>
        </NavItem>
      </Nav>
    </>
  );
}

export { NavBar };
