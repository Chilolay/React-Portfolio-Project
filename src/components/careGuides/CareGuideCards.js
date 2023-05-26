import { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { PLANTS } from "../../shared/PLANTS";
import DisplayCareGuideCards from "./DisplayCareGuideCards";
import CareCardPagination from "./CareCardPagination";
import "./CareGuides.scss";

const CareGuideCards = () => {
  const [plantsList, setPlantsList] = useState([]);
  const plantsById = () => {
    return PLANTS.map((plant) => {
      return (
        <Col key={plant.id} className="mb-4">
          <DisplayCareGuideCards plants={plant}/>
        </Col>
      );
    });
  };

  useEffect(() => {
    setPlantsList(plantsById);
  }, []);

  return (
    <Container className="careCards mb-2">
      <h1 className="my-5">Plant Care Guides</h1>
      <Row xs="2" md="4" className="g-4">
        {plantsList}
      </Row>
    <CareCardPagination />
    </Container>
  );
};

export default CareGuideCards;
