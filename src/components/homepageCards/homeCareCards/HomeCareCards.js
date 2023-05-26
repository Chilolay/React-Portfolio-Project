import { Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import DisplayCareCard from "./DisplayCareCard";
import { PLANTS } from "../../../shared/PLANTS";
import "../homepageCards.scss";

const HomeCareCards = () => {

  const randomCareGuidePlants = () => {
    const randomIndex = [];

    while (randomIndex.length < 3) {
      let random = Math.floor(Math.random() * PLANTS.length);
      if (!randomIndex.includes(random)) {
        randomIndex.push(random);
      }
    }

    return PLANTS.map((plant, i) => {
      if (randomIndex.includes(i)) {
        return (
          <Col key={plant.id} className="mb-4">
            <DisplayCareCard plant={plant} />
          </Col>
        );
      }
      return null;
    });
  };

  return (
    <div className="bg-light text-center homeCareGuideCards">
      <h2>Check Out Our In Depth Plant Care Guides</h2>
      <Row md="3" xs="1">
        {randomCareGuidePlants()}
      </Row>
      <Link to="/careGuides">
        <Button className="btn-lg m-4">See All Care Guides</Button>
      </Link>
    </div>
  );
};

export default HomeCareCards;
