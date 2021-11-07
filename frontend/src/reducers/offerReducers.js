import {
  OFFER_LIST_REQUEST,
  OFFER_LIST_SUCCESS,
  OFFER_LIST_FAIL,
} from '../constants/offerConstants';
export const offerListReducer = (state = { offers: [] }, action) => {
  switch (action.type) {
    case OFFER_LIST_REQUEST:
      return { loading: true, offers: [] };
    case OFFER_LIST_SUCCESS:
      return { loading: false, offers: action.payload };
    case OFFER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
