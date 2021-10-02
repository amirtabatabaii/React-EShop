import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Layout from "../utility/Layout";
import MostVisited from "./MostVisited";

function ProductDetail(props) {
  const { title, image, price, text, ProductsList } = props.location.state;

  return (
    <Layout>
      <div id='random__product'>
        <Row className=' d-flex justify-content-between'>
          <Col lg={8} md={12}>
            <Card.Img
              className='random__product--img'
              src={image}
              alt={title}
            />
          </Col>
          <Col lg={4} md={12}>
            <Card.Body>
              <Card.Title className='random__product--title'>
                {title}
              </Card.Title>
              <Card.Text className='random__product--text mt-3'>
                {text}
              </Card.Text>
              <Card.Text className='random__product--price'>${price}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </div>

      <MostVisited
        ProductsList={ProductsList}
        start={5}
        end={9}
        title='Similar Products'
      />
    </Layout>
  );
}

export default ProductDetail;
