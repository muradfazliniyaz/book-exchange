import { NavBar } from "./Navbar";
import { Footer } from "./Footer";
import { Row, Col } from "reactstrap";

const About = () => {
  return (
    <>
      <NavBar />
      <Row xs="3" className="about">
        <Col xs="2"></Col>
        <Col xs="8">
          <img
            src="http://www.bris.ac.uk/media-library/sites/library/images/library-home-wml-650x250.jpg"
            alt="Library"
            className="about-img"
          />
          <h3 className="text">About Us</h3>
          <p className="text">
            Book exchange set out to make it easier to reach the book and gained
            strength with you, dear book lovers, on the way. We continue to work
            to add strength to our strength and to increase the number of books
            in our repertoire.
          </p>
          <p className="text">
            Contribute to the strengthening of our platform with a book you have
            read and get the chance to access the books you want on our platform
            for free.
          </p>
          <p className="text">The best friend is BOOK.</p>
          <p className="text">Happy Reading.</p>
        </Col>
        <Col xs="2"></Col>
      </Row>
      <Footer />
    </>
  );
};

export { About };
