import { RECEIVE_ITEMS } from '../actions/pokemon_actions';
import { merge } from 'lodash';

let nextState;

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ITEMS:
      // nextState = merge({}, state);
      // nextState = action.json.json.items;
      // console.log(nextState);
      // return nextState;
      return action.json.json.items;
    default:
      return state;
  }
};

export default itemsReducer;
