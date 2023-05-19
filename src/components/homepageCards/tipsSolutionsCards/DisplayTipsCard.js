import { Card, CardBody, CardText, CardImg } from "reactstrap";

const DisplayTipsCard = () => {
  return (
    <Card className="careCard">
      <a href="/" className="h-100 mx-5">
        <CardBody>
          <CardText className="text-center"></CardText>
          <CardImg src='/' alt=" illustration" />
        </CardBody>
      </a>
    </Card>
  );
};

export default DisplayTipsCard;
