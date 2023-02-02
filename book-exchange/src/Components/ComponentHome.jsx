import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from "reactstrap";

function ComponentHome(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Card inverse>
        <CardImg
          alt="Card image cap"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPDoaxesW9ImaY3443qhNzAo8CGUffHCsgbQ&usqp=CAU"
          style={{
            height: 450,
          }}
          width="100%"
        />
        <CardImgOverlay>
          <CardTitle tag="h5">Card Title</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardImgOverlay>
      </Card>
    </>
  );
}

export { ComponentHome };
