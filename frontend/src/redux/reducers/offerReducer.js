import { ActionTypes } from '../constants/actionTypes';

const initialState = {
  offers: [],
};

export const offerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_OFFERS:
      return { ...state, offers: payload };
    default:
      return state;
  }
};

// case OFFER_LIST_SUCCESS:
//   return { loading: false, offers: action.payload };
// case OFFER_LIST_FAIL:
//   return { loading: false, error: action.payload };
// default:
//   return state;
