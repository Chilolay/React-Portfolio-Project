import { Row, Col } from "reactstrap";
import HeroCards from "./HeroCards";
import monsteraImg from "../../assets/potted_monstera.webp";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="text-center">
      <div className="heroWrapper bg-light">
        <Row>
          <Col className="colOne">
            <h1 className="mb-4">Welcome to I Wet My Plants</h1>
            <h5>
              We are the go to place for houseplant care information. Check out
              our comprehensive care guides for specific plants, read our in
              depth articles covering a variety of plant related topics, and
              scroll to the bottom of this page for links to external articles
              for more plant related tips, solutions and how to's.
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
