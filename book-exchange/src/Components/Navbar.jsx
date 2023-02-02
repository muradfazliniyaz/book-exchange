import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpuOFKS0tdfaK4l0C6ki9BmRyux2vQUkZleg&usqp=CAU"
        alt="hicoders"
      />
      <Nav pills>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/About">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="Books">Books</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="Contact">Contact</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export { NavBar };
