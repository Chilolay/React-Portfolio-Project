import { Container, Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";
import './Footer.scss';

const Footer = () => {
    return (
      <footer className="site-footer position-sticky">
        <Container>
          <Row>
            <Col className="text-center">
              <p>
                <strong>Coded by Chloe Boyd</strong>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
}

export default Footer;