import { NavBar } from "./Navbar";
import { Footer } from "./Footer";
import { SignInForm } from "./SignInForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {
  CardImg,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

const SignIn = () => {
  return (
    <>
      <NavBar />
      <Row xs="8">
        <div className="home-div text">
          <SignInForm />
          </div>
        </Row>
      <Footer />
    </>
  );
};

export { SignIn };
