import { Card, CardBody, CardTitle, CardImg } from "reactstrap";

const DisplayCareCard = ({plant}) => {
    return (
      <Card className="careCard h-100 mx-5">
        <a href="/" className="mx-5">
          <CardBody>
            <CardTitle tag="h4" className="text-center">{plant.name}</CardTitle>
            <CardImg src={plant.image} alt={`${plant.name} " illustration"`} />
          </CardBody>
        </a>
      </Card>
    );
}

export default DisplayCareCard;