import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';


const rootReducer = combineReducers({
  entites: entitiesReducer
});

export default rootReducer;
