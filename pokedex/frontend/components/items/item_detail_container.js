import { connect } from 'react-redux';
import { selectPokemonItem } from '../../reducers/selectors';
import { receivePokemonItem } from '../../actions/pokemon_actions';
import ItemDetail from './item_detail';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return {
    // item: state.entities.items
    random: selectPokemonItem(state, ownProps.match.params.itemId)
  };
};

const mapDispatchToProps = dispatch => ({
  // receivePokemonItem: (json) => receivePokemonItem(json)
});

export default withRouter(connect(mapStateToProps)(ItemDetail));
