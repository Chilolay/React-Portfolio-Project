import {  Card, CardBody, CardTitle, CardImg } from "reactstrap"
import { Link } from "react-router-dom";

const DisplayCareGuideCards = ({plants}) => {
  return (
    <a href="/">
      <Link to={plants.linkTo}>
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
      </Link>
    </a>
  );
};

export default DisplayCareGuideCards