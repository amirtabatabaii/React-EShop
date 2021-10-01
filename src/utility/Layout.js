import React, { useEffect } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import CategoryList from "../components/CategoryList";
import { GetCatListApi, GetOneCategoryProductApi } from "./apiUrl";
import { getCategoryList, getCategoryProductsList } from "../redux/action";

function Layout(props) {
  const { listOfCategory } = props;

  useEffect(() => {
    // Get Cat List
    axios.get(GetCatListApi).then((res) => {
      props.getCategoryList(res.data);
    });
  }, []);

  const showDetailHandler = (catid) => {
    // Get One Category Products List
    axios.get(GetOneCategoryProductApi + `/${catid}`).then((res) => {
      props.getCategoryProductsList(res.data);
    });
  };

  return (
    <Row className='w-100'>
      <div className='d-flex justify-content-between'>
        <Col xs={12} sm={12} md={12} lg={10}>
          {props.children}
        </Col>

        <Col>
          <CategoryList
            listOfCategory={listOfCategory}
            onClick={showDetailHandler}
          />
        </Col>
      </div>
    </Row>
  );
}

const mapStateToProps = (state) => ({
  listOfCategory: state.listOfCategory,
});

export default connect(mapStateToProps, {
  getCategoryList,
  getCategoryProductsList,
})(withRouter(Layout));
