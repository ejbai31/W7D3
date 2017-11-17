export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";
export const UPDATE_POKE_DISPLAY = "UPDATE_POKE_DISPLAY";
export const RECEIVE_ITEMS = "RECEIVE_ITEMS";

import * as APIUtil from '../util/api_util';

export const receiveAllPokemon = json => ({
  type: RECEIVE_ALL_POKEMON,
  json
});

export const requestAllPokemon = () => dispatch => (
    APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const receivePokemon = json => ({
  type: RECEIVE_POKEMON,
  json
});

export const updatePokeDisplay = json => ({
  type: UPDATE_POKE_DISPLAY,
  json
});

export const receivePokemonItem = json => ({
  type: RECEIVE_ITEMS,
  json
});

export const requestPokemon = pokemon => dispatch => (
    APIUtil.fetchPokemon(pokemon)
    .then(poke => dispatch(receivePokemon(poke)))
    .then(items => dispatch(receivePokemonItem(items)))
    .then(poke => dispatch(updatePokeDisplay(poke)))
);
