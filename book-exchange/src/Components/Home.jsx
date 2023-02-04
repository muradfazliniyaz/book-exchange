import { NavBar } from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import bookImage from "../images/library.jpg";

const Home = () => {
  return (
    <>
      <NavBar />
      <Row xs="3">
        <Col xs="2"></Col>
        <Col  className="col-container" xs="8">
          <div className="home-div text">
            <h1 className="text">Heyy Book Lovers!</h1>
            <h2 className="text">Join with a book you read, sail to new worlds</h2>
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
    </>
  );
};

export { Home };
