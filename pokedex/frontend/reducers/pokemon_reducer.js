import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';
let nextState;


const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return merge({}, state, action.json);
    case RECEIVE_POKEMON:
      nextState = merge({}, state);
      nextState[action.json.pokemon.id] = action.json.pokemon;
      console.log(nextState);
      return nextState;
    default:
      return state;
  }
};

export default pokemonReducer;
