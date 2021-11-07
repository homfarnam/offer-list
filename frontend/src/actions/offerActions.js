import axios from 'axios';
import {
  OFFER_LIST_REQUEST,
  OFFER_LIST_SUCCESS,
  OFFER_LIST_FAIL,
} from '../constants/offerConstants';

export const listOffers = () => async (dispatch) => {
  try {
    dispatch({ type: OFFER_LIST_REQUEST });

    const { data } = await axios.get('/products');

    dispatch({
      type: OFFER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {}
};
