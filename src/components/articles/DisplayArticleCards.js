import { Col, Card, CardBody, CardText, CardImg, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import lilyPhoto from "../../../src/assets/matt-0KLPrQNEnQ4-unsplash.webp";
import pottingImg from "../../assets/micheile-henderson-lpG3KTu8pIw-unsplash.webp";
import pestsImg from "../../assets/feey-qtgTwEiZz-I-unsplash.webp";
import propogationImg from "../../assets/jacob-spaccavento-15RHIb3Cfxs-unsplash.webp"
import lowLightImg from"../../assets/nicolas-solerieu-R6JrgqnlgRE-unsplash.webp"
import rootRotImg from "../../assets/mario-heller-SvU9ZIW4KeA-unsplash.webp"
import growningMediumImg from "../../assets/neslihan-gunaydin-BduDcrySLKM-unsplash.webp"
import plantsWinterImg from "../../assets/merve-selcuk-simsek-aZJklxdpNW0-unsplash.webp"
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
                <CardImg  src={pottingImg} alt="Repotting Plants" />
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
                <CardImg  src={pestsImg} alt="Repotting Plants" />
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
                <CardImg  src={propogationImg} alt="Propogating Plants" />
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
              Looking for an easy way to grow your plant collection with what
              you already have? Propogation allows you to grow a new plant with
              a piece of a mature plant. This article will tell you all you need
              to know to easily multiply your plant collection.
            </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col className="mb-4 px-2">
        <Card className="h-100 m-3">
          <CardTitle className="articleHeader">Low Light Plants</CardTitle>
          <figure className="imgContainer">
            <a href="/">
              <div className="articleImg">
                <CardImg  src={lowLightImg} alt="Plant in shadow" />
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
              Light conditions can be a challenge for housing indoor plants but
              this list of plants will thrive in low light conditions.
            </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col className="mb-4 px-2">
        <Card className="h-100 m-3">
          <CardTitle className="articleHeader">Root Rot</CardTitle>
          <figure className="imgContainer">
            <a href="/">
              <div className="articleImg">
                <CardImg  src={rootRotImg} alt="Plant in shadow" />
              </div>
            </a>
            <figcaption>
              Photo by{" "}
              <a
                href="https://unsplash.com/it/@heller_mario?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noreferrer"
              >
                Mario Heller
              </a>{" "}
              on{" "}
              <a
                href="https://unsplash.com/photos/SvU9ZIW4KeA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noreferrer"
              >
                Unsplash
              </a>
            </figcaption>
          </figure>
          <CardBody>
            <CardText>
              Root rot is a condition that will kill plants if left untreated.
              How do I know if my plants have root rot? This article will
              explain all the ins and out of root rot, how to treat and prevent
              it.
            </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col className="mb-4 px-2">
        <Card className="h-100 m-3">
          <CardTitle className="articleHeader">Growing Mediums</CardTitle>
          <figure className="imgContainer">
            <a href="/">
              <div className="articleImg">
                <CardImg  src={growningMediumImg} alt="Plant in shadow" />
              </div>
            </a>
            <figcaption>
              Photo by{" "}
              <a
                href="https://unsplash.com/@neslihangunaydin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noreferrer"
              >
                Neslihan Gunaydin
              </a>{" "}
              on{" "}
              <a
                href="https://unsplash.com/photos/BduDcrySLKM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noreferrer"
              >
                Unsplash
              </a>
            </figcaption>
          </figure>
          <CardBody>
            <CardText>
              There are many mediums you can grow houseplants in. Tired of using
              plain old potting soil? This article is to help you decide which
              medium is best for you and your plants.
            </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col className="mb-4 px-2">
        <Card className="h-100 m-3">
          <CardTitle className="articleHeader">
            Caring For Plants in Winter
          </CardTitle>
          <figure className="imgContainer">
            <a href="/">
              <div className="articleImg">
                <CardImg  src={plantsWinterImg} alt="Plant in shadow" />
              </div>
            </a>
            <figcaption>
              Photo by{" "}
              <a
                href="https://unsplash.com/pt-br/@mervess?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noreferrer"
              >
                Merve Selcuk Simsek
              </a>{" "}
              on{" "}
              <a
                href="https://unsplash.com/photos/aZJklxdpNW0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noreferrer"
              >
                Unsplash
              </a>
            </figcaption>
          </figure>
          <CardBody>
            <CardText>
              Root rot is a condition that will kill plants if left untreated.
              How do I know if my plants have root rot? This article will
              explain all the ins and out of root rot, how to treat and prevent
              it.
            </CardText>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}

export default DisplayArticleCards;
