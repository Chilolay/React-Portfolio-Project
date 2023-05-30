import "./Hero.scss";
import { Container, Row, Col, Card ,CardBody, CardTitle } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro"

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
              <FontAwesomeIcon
                icon={icon({
                  name: "arrow-right-long",
                  style: "solid",
                })}
                pull="right"
                size="3x"
              />
            </a>
          </Card>
        </Col>
        <Col className="my-2 px-2">
          <Card className="h-100">
            <a href="/">
              <CardBody>
                <CardTitle tag="h3">Low Light Plants</CardTitle>
              </CardBody>
              <FontAwesomeIcon
                icon={icon({
                  name: "arrow-right-long",
                  style: "solid",
                })}
                pull="right"
                size="3x"
              />
            </a>
          </Card>
        </Col>
        <Col className="my-2 px-2">
          <Card className="h-100">
            <a href="/">
              <CardBody>
                <CardTitle tag="h3">Repotting Guide</CardTitle>
              </CardBody>
              <FontAwesomeIcon
                icon={icon({
                  name: "arrow-right-long",
                  style: "solid",
                })}
                pull="right"
                size="3x"
              />
            </a>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroCards;
