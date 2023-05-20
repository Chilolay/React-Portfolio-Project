import { Row, Col } from "reactstrap";
import HeroCards from "./HeroCards";
import monsteraImg from "../../assets/potted_monstera.webp";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="text-center">
      <div className="heroWrapper bg-light">
        <Row>
          <Col className="px-3 colOne">
            <h1 className="mb-4">Welcome to I Wet My Plants</h1>
            <h5>
              The go to place for houseplant care. We have many care guides
              covering all you need to know about your plants as well as tips
              and solutions for common plant related problems.
            </h5>
          </Col>
          <Col className="d-none d-sm-block colTwo">
            <img
              src={monsteraImg}
              alt="Monstera plant in pot"
              className="mb-5 heroImg"
            />
          </Col>
        </Row>
      </div>
      <HeroCards />
    </div>
  );
};

export default Hero;
