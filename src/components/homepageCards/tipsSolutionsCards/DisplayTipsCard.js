import {
  Card,
  CardBody,
  CardText,
  CardImg,
  CardTitle
} from "reactstrap";

const DisplayTipsCard = ({info}) => {
  return (
      <Card className="h-100 mb-3 mx-5 tipsCard">
        <figure className="tipsCardImg">
          <CardImg src={info.srcImage} alt={info.imgAlt} />
          <figcaption className="px-2">
            <a href={info.siteLink} target="_blank" rel="noreferrer">
              {info.caption}
            </a>
          </figcaption>
        </figure>
        <CardBody>
          <CardTitle tag="h3">{info.articleTitle}</CardTitle>
          <CardText>{info.text}</CardText>
          <a
            href={info.ref}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Read The Article
          </a>
        </CardBody>
      </Card>
  );
};

export default DisplayTipsCard;
