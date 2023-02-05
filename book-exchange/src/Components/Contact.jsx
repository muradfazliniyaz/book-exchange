import { NavBar } from "./Navbar";
import { Footer } from "./Footer";
import { Row, Form, FormGroup, Label, Col, Input } from "reactstrap";

const Contact = () => {
  return (
    <>
      <NavBar />
      <Row xs="3">
        <Col xs="4"></Col>
        <Col className="col-container" xs="4">
          <Form>
            <FormGroup row>
              <Label for="firstName" sm={12}>
                First Name
              </Label>
              <Col sm={12}>
                <Input
                  id="firstName"
                  name="fname"
                  placeholder="First Name"
                  type="text"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="lastName" sm={12}>
                Last Name
              </Label>
              <Col sm={12}>
                <Input
                  id="lastName"
                  name="lname"
                  placeholder="Last Name"
                  type="text"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="emailAddress" sm={12}>
                E-Mail Adress
              </Label>
              <Col sm={12}>
                <Input
                  id="emailAddress"
                  name="email"
                  placeholder="E-Mail Address"
                  type="email"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleText" sm={12}>
                Your Message
              </Label>
              <Col sm={12}>
                <Input
                  id="exampleText"
                  name="text"
                  placeholder="Write your message here."
                  type="textarea"
                />
              </Col>
            </FormGroup>
            <FormGroup check row>
              <Col
                sm={{
                  offset: 3,
                  size: 10,
                }}
              >
                <button className="nav-button">Submit</button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
        <Col xs="4"></Col>
      </Row>
      <Footer />
    </>
  );
};

export { Contact };
