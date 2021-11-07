import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import products from '../products';

const OfferScreen = ({ match }) => {
  const offer = products.find((o) => o._id === match.params.id);

  return (
    <Fragment>
      <Link className='btn btn-light my-3 ' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={offer.image} alt={offer.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{offer.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>price: ${offer.price}</ListGroup.Item>
            <ListGroup.Item>Description: {offer.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${offer.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {offer.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className='d-grid gap-2'>
                  <Button
                    className='btn'
                    type='button'
                    disabled={offer.countInStock === 0}
                  >
                    Add To Cart
                  </Button>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default OfferScreen;
