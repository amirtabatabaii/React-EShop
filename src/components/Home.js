import React from "react";
import { Col, Row } from "react-bootstrap";

import NavBar from "./NavBar";
import RandomProducts from "./RandomProducts";
import MostVisited from "./MostVisited";
import Footer from "./Footer";
import CategoryList from "./CategoryList";

function Home() {
  return (
    <>
      <NavBar />
      <div>
        <Row className='w-100'>
          <div className='d-flex justify-content-between'>
            <Col xs={12} sm={12} md={12} lg={8}>
              <Col>
                <RandomProducts />
              </Col>

              <Col>
                <MostVisited />
              </Col>
            </Col>

            <Col>
              <CategoryList />
            </Col>
          </div>
          <div>
            <Footer />
          </div>
        </Row>
      </div>
    </>
  );
}

export default Home;
