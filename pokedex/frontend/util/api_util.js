export const fetchAllPokemon = () => (
  $.ajax({
    method: 'GET',
    url: 'api/pokemon'
  })
);

export const fetchPokemon = (pokemon) => (
  $.ajax({
    method: 'GET',
    url: `api/pokemon/${pokemon}`
  })
);
