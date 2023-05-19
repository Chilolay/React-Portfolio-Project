import { Row, Col } from "reactstrap";
import DisplayCareCard from "./DisplayCareCard";
import { PLANTS } from "../../../shared/PLANTS";
import "../homepageCards.scss";

const CareGuideCards = () => {
  // const selectRandomPlants = (arr, num) => {
  //   const shuffle = [...PLANTS].sort(() => 0.5 - Math.random()).slice(PLANTS,3);

  //   return shuffle;

  // }

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
          <Col className="p-5" key={plant.id}>
            <DisplayCareCard plant={plant} />
          </Col>
        );
      }
    });
  };

  return (
    <div className="bg-light py-5 text-center careGuideCards">
      <h2 className="text-center pb-3">
        Check Out Our In Depth Plant Care Guides
      </h2>
      <Row className="row-cols-1 row-cols-md-3">{randomCareGuidePlants()}</Row>
      <div className="d-flex justify-content-center">
        <a
          href="/"
          className="btn btn-lg btn-primary justify-content-center m-4"
        >
          See All Care Guides
        </a>
      </div>
    </div>
  );
};

export default CareGuideCards;
