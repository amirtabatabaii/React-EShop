import React from "react";
import { Card, Col, Row } from "react-bootstrap";

function CardList(props) {
  const { listOfCategoryProducts } = props;

  return (
    <div className='p-3'>
      <Row xs={1} md={2} className='w-100'>
        {listOfCategoryProducts.map((product, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant='top' src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  <p>{product.text}</p>
                  <p>$ {product.price}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CardList;
