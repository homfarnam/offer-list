/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Card } from 'react-bootstrap';
import OfferComponent from './OfferComponent';
import { setOffers } from '../redux/actions/offerActions';

const OfferListing = () => {
  // const offers = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchOffers = async () => {
    await fetch('http://cdn.sixt.io/codingtask/offers.json')
      .then((response) => response.json())
      .then((response) => {
        const renderList = response.offers.map((offer) => ({
          id: offer.id,
          name: offer.description,
          prices: offer.prices.totalPrice,
          image: offer.splashImages,
        }));
        dispatch(setOffers(renderList));
      })
      .catch((error) => {
        console.log('error: ', error);
      });

    // console.log('renderList: ', renderList);
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
