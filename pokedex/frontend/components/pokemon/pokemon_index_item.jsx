import React from 'react';
import { Link, Route } from 'react-router-dom';
import { PokemonDetail } from './pokemon_detail';

export const PokemonIndexItem = ({ poke }) => {
  return (
    <li>
      <Link to={`/pokemon/${poke.id}`}>
        <img className="menu-icon" src={poke.image_url} /> {poke.name}
      </Link>
      <Route path={`/pokemon/${poke.id}`} component={PokemonDetail} />
    </li>
  );
};
