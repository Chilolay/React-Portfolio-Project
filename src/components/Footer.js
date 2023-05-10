import { Container, Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer className="site-footer">
        <Container>
          <Row>
            <Col>
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li>
                  {/* <Link to="/">Home</Link> */}
                </li>
                <li>
                  {/* <Link to="/careguidespage">Care Guides</Link> */}
                </li>
                <li>
                  {/* <Link to="/articlespage">Articles</Link> */}
                </li>
                <li></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    );
}

export default Footer;