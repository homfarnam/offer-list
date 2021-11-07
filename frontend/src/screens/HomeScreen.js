import React, { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import Offers from '../components/Offers';
import products from '../products';

const HomeScreen = () => {
  return (
    <Fragment>
      <h1>Latest Cars Offers</h1>
      <Row>
        {products.map((offer) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Offers offer={offer} />
          </Col>
        ))}
      </Row>
    </Fragment>
  );
};

export default HomeScreen;
