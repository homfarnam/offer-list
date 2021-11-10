import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const OfferComponent = () => {
  const offers = useSelector((state) => state.allOffers.offers);
  const renderList = offers.map((offer) => {
    const { name, prices, image, id } = offer;
    console.log('offer: ', offer);
    return (
      <Card className='my-3 p-3 rounded' key={id}>
        {image?.map((item) => {
          return <Card.Img src={item.url} key={item.url} variant='top' />;
        })}
        <Card.Body>
          <Card.Title as='div'>
            <strong>{name}</strong>
          </Card.Title>
          <Card.Text as='h5'>
            <div className='my-3'>
              <h1>{prices.amount.value}</h1>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  });
  return <div>{renderList}</div>;
};

export default OfferComponent;
