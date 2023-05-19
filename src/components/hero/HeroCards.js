import "./Hero.scss";
import { Row, Col, Card ,CardBody, CardText } from "reactstrap";

const HeroCards = () => {
  return (
    <div className="heroCards">
      <Row md="3" xs="1" className="pb-5">
        <Col className="my-3 px-5">
          <Card>
            <a href="/">
              <CardBody>
                <CardText>Toxic Plants</CardText>
              </CardBody>
              <i className="fa-solid fa-arrow-right-long fa-2x fa-pull-right card-icon"></i>
            </a>
          </Card>
        </Col>
        <Col className="my-3 px-5">
          <Card>
            <a href="/">
              <CardBody>
                <CardText>Low Light Plants</CardText>
              </CardBody>
              <i className="fa-solid fa-arrow-right-long fa-2x fa-pull-right card-icon"></i>
            </a>
          </Card>
        </Col>
        <Col className="my-3 px-5">
          <Card>
            <a href="/">
              <CardBody>
                <CardText>Repotting Guide</CardText>
              </CardBody>
              <i className="fa-solid fa-arrow-right-long fa-2x fa-pull-right card-icon"></i>
            </a>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default HeroCards;
