import { Col, Card, CardBody, CardImg, CardTitle } from "reactstrap";

const ArticleCards = () => {
  return (
    <Col>
      <Card className="h-100 m-3">
        <CardTitle className="articleHeaders">Toxic Plants</CardTitle>
        <figure className="size">
          <a href="/">
            <div className="articleImg">
              <CardImg top
                src="/"
                alt="Photograph of a Lily flower"
              />
            </div>
          </a>

          <figcaption>
            Photo by{" "}
            <a href="/">
              Matt
            </a>
            on
            <a href="/">
              Unsplash
            </a>
          </figcaption>
        </figure>

        <CardBody>
          <p className="card-text">
            Did you know some of your houseplants may be toxic to you and your
            pets? This is a comprehensive list of toxic plants to avoid if you
            have pets or littleones.
          </p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ArticleCards;
