import React from 'react'
import './Hero.css'
import { Row, Col } from "reactstrap";
import HeroCards from './HeroCards';
import monsteraImg from "../../app/assets/potted_monstera.webp";


const Hero = () => {
  return (
    <div className="heroWrapper text-center">
      <Row>
        <Col className='ml-5'>
          <h1 className="mb-4 ml-5">Welcome to I Wet My Plants</h1>
          <h5 className='ml-5'>
            The go to place for houseplant care. We have many care guides
            covering all you need to know about your plants as well as tips and
            solutions for common plant related problems.
          </h5>
        </Col>
        <Col className="d-none d-sm-block">
          <img
            src={monsteraImg}
            alt="Monstera plant in pot"
            className="heroImg"
          />
        </Col>
      </Row>
      <HeroCards />
    </div>
  );
}

export default Hero