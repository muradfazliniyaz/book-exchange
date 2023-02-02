import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormGroup, Label, Col, Input, Button } from "reactstrap";

function ComponentContact(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Form>
        <FormGroup row>
          <Label for="firstName" sm={1}>
            First Name
          </Label>
          <Col sm={4}>
            <Input
              id="firstName"
              name="fname"
              placeholder="First Name"
              type="text"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="lastName" sm={10}>
            Last Name
          </Label>
          <Col sm={4}>
            <Input
              id="lastName"
              name="lname"
              placeholder="Last Name"
              type="text"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="emailAddress" sm={10}>
            E-Mail Adress
          </Label>
          <Col sm={4}>
            <Input
              id="emailAddress"
              name="email"
              placeholder="E-Mail Address"
              type="email"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={10}>
            Your Message
          </Label>
          <Col sm={4}>
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
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
}

export { ComponentContact };
