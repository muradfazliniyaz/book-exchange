import { NavBar } from "./Navbar";
import { Footer } from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardImg, Row, Col } from "reactstrap";
import bookImage from "../images/library.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <NavBar />
      <Row xs="3">
        <Col xs="2"></Col>
        <Col className="col-container" xs="8">
          <div className="home-div text">
            <h1 className="text">Heyy Book Lovers!</h1>
            <h2 className="text">
              Join us with a book you read, sail to new worlds...
            </h2>
            <Link type="submit" className="nav-button" to="/SignIn">
              Join Now
            </Link>
          </div>
          <div className="home-div text">
            <CardImg
              alt="Card image cap"
              src={bookImage}
              style={{
                height: 400,
              }}
              width="100%"
              className="cardimage"
            />
          </div>
        </Col>
        <Col xs="2"></Col>
      </Row>
      <Footer />
    </>
  );
};

export { Home };
