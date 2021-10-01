import React from "react";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import Layout from "../utility/Layout";
import CategoryList from "./CategoryList";
import CardList from "./ui/CardList";

function CategoryProducts(props) {
  const { id } = props.match.params;
  const { listOfCategoryProducts } = props;

  return (
    <Layout>
      <CardList listOfCategoryProducts={listOfCategoryProducts} />
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  listOfCategoryProducts: state.listOfCategoryProducts,
});

export default connect(mapStateToProps, {})(CategoryProducts);
