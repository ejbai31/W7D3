import values from 'lodash/values';

export const selectAllPokemon = state => {
  console.log(state);
  return values(state.entites.pokemon);
};
