import React from "react";
import { Col, Row } from "react-bootstrap";

import NavBar from "./NavBar";

function Home() {
  return (
    <>
      <NavBar />
      <div>
        <Row className='w-100'>
          <div className='d-flex justify-content-between'>
            <Col xs={12} sm={12} md={12} lg={8}>
              <Col className='bg-danger'>Random product with detail</Col>

              <Col className='bg-info'>Most Visited</Col>
            </Col>

            <Col className='d-none d-lg-block bg-warning'>Category List</Col>
          </div>
          <div className='bg-secondary'>FOOTER</div>
        </Row>
      </div>
    </>
  );
}

export default Home;
