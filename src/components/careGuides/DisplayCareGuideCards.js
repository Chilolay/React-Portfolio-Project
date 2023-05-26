import {  Card, CardBody, CardTitle, CardImg } from "reactstrap"

const DisplayCareGuideCards = ({plants}) => {
  return (
    <a href="/">
      <Card className="h-100 careGuideCards">
        <CardImg
          src={plants.image}
          className="card-img-top"
          alt={`{plants.name} " illustration"`}
        />
        <CardBody>
          <CardTitle tag="h5">{plants.name}</CardTitle>
        </CardBody>
      </Card>
    </a>
  );
};

export default DisplayCareGuideCards