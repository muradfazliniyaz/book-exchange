import { NavBar } from "./Navbar";
import { Footer } from "./Footer";
import { Row, Form, FormGroup, Label, Col, Input } from "reactstrap";

const UserPage = () => {
  return (
    <>
      <NavBar />
      <Row xs="3">
        <Col xs="4"></Col>
        <Col className="col-container" xs="4">
          <div className="home-div text">
            <h4 className="user-h4">My Books</h4>
          </div>
          <div className="home-div text">
            <Form>
              <FormGroup row>
                <Label for="bookName" sm={12}>
                  Book Name
                </Label>
                <Col sm={12}>
                  <Input
                    id="bookName"
                    name="bname"
                    placeholder="Book Name"
                    type="text"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="author" sm={12}>
                  Author
                </Label>
                <Col sm={12}>
                  <Input
                    id="author"
                    name="author"
                    placeholder="Author"
                    type="text"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="isbnNumber" sm={12}>
                  ISBN Number
                </Label>
                <Col sm={12}>
                  <Input
                    id="isbnNumber"
                    name="isbnNUmber"
                    placeholder="ISBN Number"
                    type="text"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="explanation" sm={12}>
                  Explanation
                </Label>
                <Col sm={12}>
                  <Input
                    id="explanation"
                    name="text"
                    placeholder="Explanation About Your Book."
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
                  <button className="nav-button">Save</button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </Col>
        <Col xs="4"></Col>
      </Row>
      <Footer />
    </>
  );
};

export { UserPage };
