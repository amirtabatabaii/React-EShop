import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function CardList(props) {
  const { ColSize, mainPage, Lists, start, end, listOfRandomProducts } = props;

  return (
    <div id={mainPage ? "card__list" : ""}>
      <Row xs={1} md={2} className='w-100 p-3 m-auto'>
        {Lists?.slice(start, end).map((product, idx) => (
          <Col key={idx} className='p-3' lg={ColSize}>
            <Link
              className='card__list--card'
              to={{
                target: "_blank",
                pathname: `/product/${product.id}`,
                state: {
                  id: product.id,
                  title: product.title,
                  image: product.image,
                  text: product.text,
                  price: product.price,
                  ProductsList: listOfRandomProducts,
                },
              }}
            >
              <Card>
                <Card.Img variant='top' src={product.image} />
                <Card.Body>
                  <Card.Title>
                    <span>
                      <h5>{product.title}</h5>
                      <h6>${product.price}</h6>
                    </span>
                  </Card.Title>
                  {/* <Card.Text>
                  <p>{product.text}</p>
                </Card.Text> */}
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => ({
  listOfRandomProducts: state.listOfRandomProducts,
});

export default connect(mapStateToProps, {})(CardList);
