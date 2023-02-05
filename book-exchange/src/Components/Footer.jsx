import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

function Footer(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return <div className="footer-container">Copyright © 2023 Book Exchange</div>;
}

export { Footer };
