import "./Hero.css";
import { Container, Row, Col, Card, CardBody, CardText } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const HeroCards = () => {
  return (
    <Container className="heroCards">
      <Row className="row-cols-1 row-cols-md-3 pb-5">
        <Col className="my-3">
          <Card>
            <a href="../../pages/ArticlesPages">
              <CardBody>
                <CardText className="cardText">Toxic Plants</CardText>
                <FontAwesomeIcon className="cardIcon" icon={faArrowRightLong} />
              </CardBody>
            </a>
          </Card>
        </Col>
        <Col className="my-3">
          <Card>
            <a href="../../pages/ArticlesPages">
              <CardBody>
                <CardText className="cardText">Low Light Plants</CardText>
                <FontAwesomeIcon className="cardIcon" icon={faArrowRightLong} />
              </CardBody>
            </a>
          </Card>
        </Col>
        <Col className="my-3">
          <Card>
            <a href="../../pages/ArticlesPages">
              <CardBody>
                <CardText className="cardText">Repotting Guide</CardText>
                <FontAwesomeIcon className="cardIcon" icon={faArrowRightLong} />
              </CardBody>
            </a>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroCards;
