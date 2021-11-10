import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import OfferComponent from './OfferComponent';
import { setOffers } from '../redux/actions/offerActions';

const OfferListing = () => {
  const offers = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchOffers = async () => {
    const response = await fetch('http://cdn.sixt.io/codingtask/offers.json');
    const data = await response.json();
    const renderList = data.offers.map((offer) => ({
      id: offer.id,
      name: offer.description,
      prices: offer.prices.totalPrice,
      image: offer.splashImages,
    }));
    // console.log('renderList: ', renderList);
    dispatch(setOffers(renderList));
  };

  useEffect(() => {
    fetchOffers();
  }, []);
  return (
    <Card className='my-3 p-3 rounded'>
      <OfferComponent />
    </Card>
  );
};

export default OfferListing;

// <Link to={`/offer/${offer._id}`}>
//         <Card.Img src={offer.image} variant='top' />
//       </Link>
//       <Card.Body>
//         <Link to={`/offer/${offer._id}`}>
//           <Card.Title as='div'>
//             <strong>{offer.name}</strong>{' '}
//           </Card.Title>
//         </Link>
//         <Card.Text as='h5'>
//           <div className='my-3'> $ {offer.price} </div>
//         </Card.Text>
// </Card.Body>
