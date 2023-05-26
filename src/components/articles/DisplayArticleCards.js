import { Row } from "reactstrap";
import ArticleCards from "./ArticleCards";
// import "./Articles.scss";


const DisplayArticleCards = () => {
  return (
  <Row xs="1" md="2" className="g-4 mb-5">
    <ArticleCards />
  </Row>
  )
}

export default DisplayArticleCards
