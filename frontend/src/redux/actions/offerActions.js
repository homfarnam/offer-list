import axios from 'axios';
import { ActionTypes } from '../constants/actionTypes';

export const setOffers = (offers) => {
  return {
    type: ActionTypes.SET_OFFERS,
    payload: offers,
  };
};

export const selectOffer = (offer) => {
  return {
    type: ActionTypes.SELECTED_OFFER,
    payload: offer,
  };
};

// OFFER_LIST_REQUEST,
//   OFFER_LIST_SUCCESS,
//   OFFER_LIST_FAIL,

// export const listOffers = () => async (dispatch) => {
//   try {
//     dispatch({ type: OFFER_LIST_REQUEST });

//     dispatch({
//       type: OFFER_LIST_SUCCESS,
//       // payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: OFFER_LIST_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

// export const offerListRequest = () => {
//   return {
//     type: OFFER_LIST_REQUEST,
//   };
// };

// export const offerListSuccess = (offers) => {
//   return {
//     type: OFFER_LIST_SUCCESS,
//     paload: offers,
//   };
// };

// export const offerListFail = (error) => {
//   return {
//     type: OFFER_LIST_FAIL,
//     payload: error,
//   };
// };

// export const fetchOffers = () => {
//   return (dispatch) => {
//     dispatch(offerListRequest);
//     axios
//       .get('http://cdn.sixt.io/codingtask/offers.json')
//       .then((responce) => {
//         const offers = responce.data;
//         dispatch(offerListSuccess(offers));
//       })
//       .catch((error) => {
//         const errorMsg = error.message;
//         dispatch(offerListFail(errorMsg));
//       });
//   };
// };
