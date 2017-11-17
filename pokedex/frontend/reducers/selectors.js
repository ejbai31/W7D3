import values from 'lodash/values';

export const selectAllPokemon = state => {
  // console.log(state);
  return values(state.entities.pokemon);
};

export const selectPokemonItem = (state, itemId) => {
  const items = state.entities.items;
  for (let i=0; i < items.length; i++){
    if (items[i].id === parseInt(itemId)){
      console.log(items[i]);
      return items[i];
    }
  }
};
