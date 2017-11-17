import { UPDATE_POKE_DISPLAY } from '../actions/pokemon_actions';
import { merge } from 'lodash';

let nextState;

const _defaultState = {
    pokeDisplay: 0,
    errors: {},
    loading: {},
  };

const uiReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case UPDATE_POKE_DISPLAY:
      nextState = merge({}, state);
      nextState.pokeDisplay = action.json.json.json.pokemon.id;
      return nextState;
    default:
      return state;
  }
};

export default uiReducer;
