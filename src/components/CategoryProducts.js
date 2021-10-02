import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { GetOneCategoryProductApi } from "../utility/apiUrl";
import Layout from "../utility/Layout";
import CardList from "./ui/CardList";
import { getCategoryProductsList } from "../redux/action";
import { withRouter } from "react-router";

function CategoryProducts(props) {
  // const { id } = props.match.params;
  const { listOfCategoryProducts } = props;
  const [ProductsList, setProductsList] = useState([]);

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const prevAmount = usePrevious({ listOfCategoryProducts });
  useEffect(() => {
    if (prevAmount === undefined) {
    } else if (prevAmount.listOfCategoryProducts !== listOfCategoryProducts) {
      setProductsList(listOfCategoryProducts);
    }
  }, [listOfCategoryProducts]);

  return (
    <Layout>
      <CardList Lists={ProductsList} ColSize={4} mainPage={true} />
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  listOfCategoryProducts: state.listOfCategoryProducts,
});

export default connect(mapStateToProps, { getCategoryProductsList })(
  withRouter(CategoryProducts)
);
