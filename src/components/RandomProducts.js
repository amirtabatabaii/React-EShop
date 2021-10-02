import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";

function RandomProducts(props) {
  const { productDetail, listOfRandomProducts } = props;

  if (productDetail.length === 0)
    return (
      <div className='align-item-center'>
        <ReactLoading
          type='spinningBubbles'
          color='red'
          height={55}
          width={55}
        />
      </div>
    );

  return (
    <div id='random__product'>
      <Row className=' d-flex justify-content-between'>
        <Col lg={5} md={12}>
          <Card.Img
            className='random__product--img'
            src={productDetail[0].image}
            alt={productDetail[0].title}
          />
        </Col>
        <Col lg={7} md={12}>
          <Card.Body>
            <Card.Title>
              <Link
                className='random__product--title'
                to={{
                  target: "_blank",
                  pathname: `/product/${productDetail[0].id}`,
                  state: {
                    id: productDetail[0].id,
                    title: productDetail[0].title,
                    image: productDetail[0].image,
                    text: productDetail[0].text,
                    price: productDetail[0].price,
                    listOfRandomProducts: listOfRandomProducts,
                  },
                }}
              >
                {productDetail[0].title}
              </Link>
            </Card.Title>
            <Card.Text className='random__product--text mt-3'>
              {productDetail[0].text}
            </Card.Text>
            <Card.Text className='random__product--price'>
              ${productDetail[0].price}
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </div>
  );
}

export default RandomProducts;
