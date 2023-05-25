import { Row, Col } from "reactstrap";
import DisplayTipsCard from "./DisplayTipsCard";
import "../homepageCards.scss";
import { ARTICLES } from "../../../shared/ARTICLES";

const TipsSolutionsCards = () => {
  const displayCards = () => {
    return ARTICLES.map((v, i) => {
      return (
        <Col key={i}>
          <DisplayTipsCard info={v} />
        </Col>
      );
    });
  };

  return (
    <div className="bg-light py-5 tipsCards">
      <h2 className="pb-3 text-center">Tips, Solutions, How To's</h2>
      <Row md="2" xs="1" className="d-flex">
        {displayCards()}
      </Row>
    </div>
  );
};

export default TipsSolutionsCards;
