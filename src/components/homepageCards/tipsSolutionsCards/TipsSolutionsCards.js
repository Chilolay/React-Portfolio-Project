import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
} from "reactstrap";
import "../homepageCards.scss";

const TipsSolutionsCards = () => {
  return (
    <div className="bg-light py-5 tipsCards">
      <h2 className="pb-3 text-center">Tips, Solutions, How To's</h2>
      <Row className=" row-cols-1 row-cols-md-2 d-flex justify-content-center">
        <Col>
          <Card className="h-100">
            <figure className="size">
              <CardImg
                src="./images/earthEasyImg.webp"
                alt="plant under light"
              />
              <figcaption className="px-2">
                <a
                  href="https://eartheasy.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  eartheasy
                </a>
              </figcaption>
            </figure>
            <CardBody>
              <CardTitle>The Best Grow Lights for Indoor Plants</CardTitle>
              <CardText>
                How to choose supplemental lighting to help your plants thrive.
              </CardText>
              <a
                href="https://learn.eartheasy.com/guides/the-best-grow-lights-for-indoor-plants/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Read The Article
              </a>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <figure className="size">
              <CardImg
                src="./images/ikeaGreenhouse.webp"
                alt="ikea greenhouse cabinet with plants"
              />
              <figcaption className="px-2">
                <a
                  href="https://www.thespruce.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  The Spruce
                </a>{" "}
                / Cori Sears
              </figcaption>
            </figure>
            <CardBody>
              <CardText>How to Make an IKEA Greenhouse Cabinet</CardText>
              <CardText>
                The trendy IKEA DIY that every plant parent needs.
              </CardText>
              <a
                href="https://www.thespruce.com/make-an-ikea-greenhouse-cabinet-5521629"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Read The Article
              </a>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <figure className="size">
              <CardImg
                src="./images/houseplantTools.webp"
                alt="Plants being repotted"
              />
              <figcaption className="px-2">
                <a
                  href="https://www.ruralsprout.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Rural Sprout
                </a>
              </figcaption>
            </figure>
            <CardBody>
              <CardTitle>
                Houseplant Tool Guide: 8 Must-Have & 12 Nice-To-Have Tools For
                Your Home Jungle
              </CardTitle>
              <a
                href="https://www.ruralsprout.com/houseplant-tool-guide/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Read The Article
              </a>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <figure className="size">
              <CardImg
                src="./images/B82DD065-5D39-4C00-AA2D-820CFCA33478.webp"
                alt="Plants growing in containers of water"
              />
              <figcaption className="px-2">
                <a
                  href="https://modernbotanical.shop/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Modern Botanical
                </a>
              </figcaption>
            </figure>
            <CardBody>
              <h3 className="card-title">
                The Internet's Best Guide to Growing Plants in Water
              </h3>
              <a
                href="https://modernbotanical.shop/blogs/blog/a-guide-to-growing-plants-in-water"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Read The Article
              </a>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default TipsSolutionsCards;
