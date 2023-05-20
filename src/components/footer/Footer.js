import { Container, Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";
import './Footer.scss';

const Footer = () => {
    return (
      <footer className="site-footer position-sticky">
        <Container>
          <Row>
            <Col className="text-center">
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li>{/* <Link to="/">Home</Link> */}</li>
                <li>{/* <Link to="/careguidespage">Care Guides</Link> */}</li>
                <li>{/* <Link to="/articlespage">Articles</Link> */}</li>
                <li></li>
              </ul>
            </Col>
            <Col>
              <p className="m-0">
                <strong>Coded by Chloe Boyd</strong>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
}

export default Footer;