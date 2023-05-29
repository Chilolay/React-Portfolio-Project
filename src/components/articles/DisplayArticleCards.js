import { Col, Card, CardBody, CardText, CardImg, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import lilyPhoto from "../../../src/assets/matt-0KLPrQNEnQ4-unsplash.webp";
import pottingImg from "../../assets/micheile-henderson-lpG3KTu8pIw-unsplash.webp";
import pestsImg from "../../assets/feey-qtgTwEiZz-I-unsplash.webp";
import propogationImg from "../../assets/jacob-spaccavento-15RHIb3Cfxs-unsplash.webp"
import lowLightImg from"../../assets/nicolas-solerieu-R6JrgqnlgRE-unsplash.webp"
import "./Articles.scss";

const DisplayArticleCards = () => {
  return (
    <>
      <Col className="mb-4 px-2">
        <Card className="h-100 m-3">
          <CardTitle className="articleHeader">Toxic Plants</CardTitle>
          <figure className="imgContainer">
            <Link to="/exampleArticle">
              <div className="articleImg">
                <CardImg
                  top
                  src={lilyPhoto}
                  alt="Photograph of a Lily flower"
                />
              </div>
            </Link>
            <figcaption>
              Photo by <a href="/"> Matt </a> on <a href="/">Unsplash</a>
            </figcaption>
          </figure>
          <CardBody>
            <CardText>
              Did you know some of your houseplants may be toxic to you and your
              pets? This is a comprehensive list of toxic plants to avoid if you
              have pets or little ones.
            </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col className="mb-4 px-2">
        <Card className="h-100 m-3">
          <CardTitle className="articleHeader">Repotting Guide</CardTitle>
          <figure className="imgContainer">
            <a href="/">
              <div className="articleImg">
                <CardImg top src={pottingImg} alt="Repotting Plants" />
              </div>
            </a>
            <figcaption>
              Photo by{" "}
              <a
                href="https://unsplash.com/@micheile?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noreferrer"
              >
                Micheile Henderson
              </a>{" "}
              on{" "}
              <a
                href="https://unsplash.com/photos/lpG3KTu8pIw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noreferrer"
              >
                Unsplash
              </a>
            </figcaption>
          </figure>
          <CardBody>
            <CardText>
              Not sure when to repot your plants? We've got you covered! We'll
              walk you through step by step when to repot, how to repot, what
              kind of pots to use and all the in between.
            </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col className="mb-4 px-2">
        <Card className="h-100 m-3">
          <CardTitle className="articleHeader">
            Common Pests and How to Deal With Them
          </CardTitle>
          <figure className="imgContainer">
            <a href="/">
              <div className="articleImg">
                <CardImg top src={pestsImg} alt="Repotting Plants" />
              </div>
            </a>
            <figcaption>
              Photo by{" "}
              <a
                href="https://unsplash.com/es/@feeypflanzen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noreferrer"
              >
                Feey
              </a>{" "}
              on{" "}
              <a
                href="https://unsplash.com/photos/qtgTwEiZz-I?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noreferrer"
              >
                Unsplash
              </a>
            </figcaption>
          </figure>
          <CardBody>
            <CardText>
              Pests are a reality for most houseplant owners. A few bugs can't
              do much harm but can easily multiply and cause damage if left
              untreated. We've listed the most common houseplant pests here and
              the most effective and safe ways to control them.
            </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col className="mb-4 px-2">
        <Card className="h-100 m-3">
          <CardTitle className="articleHeader">Propogation Guide</CardTitle>
          <figure className="imgContainer">
            <a href="/">
              <div className="articleImg">
                <CardImg top src={propogationImg} alt="Propogating Plants" />
              </div>
            </a>
            <figcaption>
              Photo by{" "}
              <a
                href="https://unsplash.com/@sp_cca?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noreferrer"
              >
                Jacob Spaccavento
              </a>{" "}
              on{" "}
              <a
                href="https://unsplash.com/photos/15RHIb3Cfxs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noreferrer"
              >
                Unsplash
              </a>
            </figcaption>
          </figure>
          <CardBody>
            <CardText>
              Pests are a reality for most houseplant owners. A few bugs can't
              do much harm but can easily multiply and cause damage if left
              untreated. We've listed the most common houseplant pests here and
              the most effective and safe ways to control them.
            </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col className="mb-4 px-2">
        <Card className="h-100 m-3">
          <CardTitle className="articleHeader">Propogation Guide</CardTitle>
          <figure className="imgContainer">
            <a href="/">
              <div className="articleImg">
                <CardImg top src={lowLightImg} alt="Plant in shadow" />
              </div>
            </a>
            <figcaption>
              Photo by{" "}
              <a
                href="https://unsplash.com/@slrncl?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noreferrer"
              >
                Nicolas Solerieu
              </a>{" "}
              on{" "}
              <a
                href="https://unsplash.com/photos/R6JrgqnlgRE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noreferrer"
              >
                Unsplash
              </a>
            </figcaption>
          </figure>
          <CardBody>
            <CardText>
              Pests are a reality for most houseplant owners. A few bugs can't
              do much harm but can easily multiply and cause damage if left
              untreated. We've listed the most common houseplant pests here and
              the most effective and safe ways to control them.
            </CardText>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}

export default DisplayArticleCards;
