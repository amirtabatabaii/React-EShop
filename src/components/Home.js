import React from "react";
import { Col } from "react-bootstrap";

import RandomProducts from "./RandomProducts";
import MostVisited from "./MostVisited";
import Layout from "../utility/Layout";

function Home(props) {
  return (
    <Layout>
      <Col>
        <RandomProducts />
      </Col>

      <Col>
        <MostVisited />
      </Col>
    </Layout>
  );
}

export default Home;
