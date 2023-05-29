import { Container, Row } from "reactstrap";
import DisplayArticleCards from './DisplayArticleCards';
import "./Articles.scss"

const ArticleCards = () => {
  return (
    <Container className="articleCards">
      <h1>Articles</h1>
      <Row xs="1" md="2" className="g-4 mb-5">
          <DisplayArticleCards />
      </Row>
    </Container>
  );
};

export default ArticleCards;
