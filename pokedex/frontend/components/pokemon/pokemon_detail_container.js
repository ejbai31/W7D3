import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestPokemon } from '../../actions/pokemon_actions';
import { withRouter } from 'react-router';

const mapStateToProps = state => ({
  pokemon: state.entities.pokemon[state.ui.pokeDisplay],
  items: state.entities.items
});

const mapDispatchToProps = dispatch => ({
  requestPokemon: (poke) => dispatch(requestPokemon(poke))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)) ;
