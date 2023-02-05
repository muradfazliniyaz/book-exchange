import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

function ComponentBooks(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <CardGroup>
      <Card>
        <CardImg
          alt="Card image cap"
          src="https://www.kitapvadisi.com.tr/beyaz-dis-jlondon-tomurcuk-yay-dunya-klasikleri-zambak-hikaye-yayinlari-kolektif-456124-25-B.jpg"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">Beyaz Diş</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Jack London
          </CardSubtitle>
          <CardText>
            Jack London aslem Amerikalı bir yazar olup asıl adı John Griffith
            Chaney' dir. 1876 yılında San Francisco' da doğmuştur.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg
          alt="Card image cap"
          src="data:image/jpeg;base64,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"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">Nar Tanesi Şiirler</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Çocuklar için seçilmiş şiirler
          </CardSubtitle>
          <CardText>
            Çocuklar için seçilmiş Nar tanesi tadında şiirler...
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/318/180"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/318/180"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/318/180"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/318/180"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardGroup>
  );
}

export { ComponentBooks };
