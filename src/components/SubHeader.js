import { Col, Row, Breadcrumb, BreadcrumbItem } from "reactstrap";
// import { Link } from "react-router-dom";

const SubHeader = () => {
  return (
    <Row>
      <Col>
        <Breadcrumb>
          <BreadcrumbItem>
            Home
            {/* <Link to="/">Home</Link> */}
          </BreadcrumbItem>
          {/* {detail && ( */}
            <BreadcrumbItem>
            Care Guides
              {/* <Link to="/careGuides">Care Guides</Link> */}
            </BreadcrumbItem>
          {/* )} */}
          <BreadcrumbItem>
            Articles
          </BreadcrumbItem>
        </Breadcrumb>
        {/* // <h2>{current}</h2> */}
        <hr />
      </Col>
    </Row>
  );
};

export default SubHeader;
