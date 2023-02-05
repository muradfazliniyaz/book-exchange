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

const SignIn = () => {
  return (
    <>
      <NavBar />
      <Row xs="3">
        <Col xs="2"></Col>
        <Col className="col-container" xs="8">
          <div className="home-div text">
            <CardImg
              alt="Card image cap"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4kd_eJCIN_EA-4ZD1VBjK9VtfhB7YQcWR6RS2f9050rJKa1yrV8YKvza_jVmprAliGds&usqp=CAU"
              style={{
                height: 400,
              }}
              width="100%"
              className="cardimage"
            />
          </div>
          <div className="home-div text">
            <h3>Sign In</h3>
            <Form>
              <FormGroup>
                <Label for="exampleName" hidden>
                  Name
                </Label>
                <Input
                  id="exampleName"
                  name="name"
                  placeholder="Name"
                  type="text"
                />
              </FormGroup>{" "}
              <FormGroup>
                <Label for="exampleSurname" hidden>
                  Password
                </Label>
                <Input
                  id="exampleSurname"
                  name="surname"
                  placeholder="Surname"
                  type="text"
                />
              </FormGroup>{" "}
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
              <Button>Sign In</Button>
            </Form>
            <h6>
              Already Signed Up?{" "}
              <Link type="submit" to="/Login">
                Log In
              </Link>
            </h6>
          </div>
        </Col>
        <Col xs="2"></Col>
      </Row>
      <Footer />
    </>
  );
};

export { SignIn };
