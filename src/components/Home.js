import React, { useEffect } from "react";
import { Col } from "react-bootstrap";

import { GetRandomProductsApi } from "../utility/apiUrl";

import { getRandomProductsList } from "../redux/action";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import axios from "axios";

import RandomProducts from "./RandomProducts";
import MostVisited from "./MostVisited";
import Layout from "../utility/Layout";

function Home(props) {
  const { listOfRandomProducts } = props;

  useEffect(() => {
    axios.get(GetRandomProductsApi + `/10`).then((res) => {
      props.getRandomProductsList(res.data);
    });
  }, []);

  return (
    <Layout>
      <Col>
        <RandomProducts
          productDetail={listOfRandomProducts.slice(4, 5)}
          ProductsList={listOfRandomProducts.slice(5, 9)}
        />
      </Col>

      <Col>
        <MostVisited
          ProductsList={listOfRandomProducts.slice(0, 4)}
          start={0}
          end={4}
          title='Most Visited'
        />
      </Col>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  listOfRandomProducts: state.listOfRandomProducts,
});

export default connect(mapStateToProps, {
  getRandomProductsList,
})(withRouter(Home));
