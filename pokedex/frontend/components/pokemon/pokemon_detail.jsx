import React from 'react';
import ItemDetail from '../items/item_detail';
import { Link } from 'react-router-dom';
import { Route } from 'react-router';
import ItemDetailContainer from '../items/item_detail_container';

class PokemonDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestPokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
      this.props.requestPokemon(newProps.match.params.pokemonId);
    }
  }

  render() {
    if (this.props.pokemon) {
      const { id, name, attack, defense, poke_type, moves, image_url, item_ids } = this.props.pokemon;
      return(
        <div>
            <img src={image_url} />
            <ul>
              <li><h1>{name}</h1></li>
              <li>Type: {poke_type}</li>
              <li>Attack: {attack}</li>
              <li>Defense: {defense}</li>
              <li>Moves: {moves}</li>
            </ul>
            Items
            <ul>
              {this.props.items.map((item,idx) => (
                <li key={idx}>
                  <Link to={`/pokemon/${id}/item/${item.id}`}>
                    <img src={item.image_url}/>
                  </Link>
                  </li>))}
            </ul>
            <Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailContainer} />
        </div>
      );
    }else{
      return (<h1>Loading...</h1>);
    }
  }
}

export default PokemonDetail;
