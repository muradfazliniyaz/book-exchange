import { NavBar } from "./Navbar";
import { Footer } from "./Footer";
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

const Login = () => {
  return (
    <>
      <NavBar />
      <Row xs="3">
        <Col xs="2"></Col>
        <Col className="col-container" xs="8">
          <div className="home-div text">
            <CardImg
              alt="Card image cap"
              src="data:image/jpeg;base64,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"
              style={{
                height: 400,
              }}
              width="100%"
              className="cardimage"
            />
          </div>
          <div className="home-div text">
            <h3>Log In</h3>
            <Form>
              <FormGroup>
                <Label for="exampleEmail" hidden>
                  Email
                </Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
              </FormGroup>{" "}
              <FormGroup>
                <Label for="examplePassword" hidden>
                  Password
                </Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="Password"
                  type="password"
                />
              </FormGroup>{" "}
              <Link className="nav-button" to="/UserPage">
              <Button>Log In</Button>
          </Link>
            </Form>
            <h6>
              Not a Member?{" "}
              <Link type="submit" to="/SignIn">
                Sign In
              </Link>
            </h6>
            <a href="">Forgot Your Password</a>
          </div>
        </Col>
        <Col xs="2"></Col>
      </Row>
      <Footer />
    </>
  );
};

export { Login };




