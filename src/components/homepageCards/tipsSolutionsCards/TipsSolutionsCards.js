import { Row, Col } from "reactstrap";
import DisplayTipsCard from "./DisplayTipsCard";
import "../homepageCards.scss";
import { ARTICLES } from "../../../shared/ARTICLES";

const TipsSolutionsCards = () => {
  const displayCards = () => {
    return ARTICLES.map((v, i) => {
      return (
        <Col className="p-5" key={i}>
          <DisplayTipsCard info={v} />
        </Col>
      );
    });
  };

  return (
    <div className="bg-light py-5 tipsCards">
      <h2 className="pb-3 text-center">Tips, Solutions, How To's</h2>
      <Row className="row-cols-1 row-cols-md-2 d-flex justify-content-center">
        {displayCards()}
      </Row>
    </div>
  );
};

export default TipsSolutionsCards;
