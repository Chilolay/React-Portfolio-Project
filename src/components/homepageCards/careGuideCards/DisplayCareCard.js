import { Card, CardBody, CardText, CardImg } from "reactstrap";

const DisplayCareCard = ({plant}) => {
    return (
          <Card className="careCard">
            <a href="/" className="h-100 mx-5">
              <CardBody>
                <CardText className="text-center">{plant.name}</CardText>
                <CardImg
                  src={plant.image}
                  alt={`${plant.name} " illustration"`}
                />
              </CardBody>
            </a>
          </Card>
    )
}

export default DisplayCareCard;