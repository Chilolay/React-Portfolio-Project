import "./Hero.scss";
import { Container, Row, Col, Card ,CardBody, CardTitle } from "reactstrap";

const HeroCards = () => {
  return (
    <Container className="heroCards">
      <Row xs="1" md="3" className="pb-5">
        <Col className="my-2 px-2">
          <Card className="h-100">
            <a href="/">
              <CardBody>
                <CardTitle tag="h3">Toxic Plants</CardTitle>
              </CardBody>
              {/* <i className="fa-solid fa-arrow-right-long fa-2x fa-pull-right card-icon"></i> */}
            </a>
          </Card>
        </Col>
        <Col className="my-2 px-2">
          <Card className="h-100">
            <a href="/">
              <CardBody>
                <CardTitle tag="h3">Low Light Plants</CardTitle>
              </CardBody>
              {/* <i className="fa-solid fa-arrow-right-long fa-2x fa-pull-right card-icon"></i> */}
            </a>
          </Card>
        </Col>
        <Col className="my-2 px-2">
          <Card className="h-100">
            <a href="/">
              <CardBody>
                <CardTitle tag="h3">Repotting Guide</CardTitle>
              </CardBody>
              {/* <i className="fa-solid fa-arrow-right-long fa-2x fa-pull-right card-icon"></i> */}
            </a>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroCards;
