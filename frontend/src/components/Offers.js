import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import products from '../products';

const Offers = ({ offer }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/offer/${offer._id}`}>
        <Card.Img src={offer.image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/offer/${offer._id}`}>
          <Card.Title as='div'>
            <strong>{offer.name}</strong>{' '}
          </Card.Title>
        </Link>
        <Card.Text as='h5'>
          <div className='my-3'> $ {offer.price} </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Offers;
