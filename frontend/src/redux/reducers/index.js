import { combineReducers } from 'redux';
import { offerReducer } from './offerReducer';

const reducers = combineReducers({
  //define a key
  allOffers: offerReducer,
});

export default reducers;
