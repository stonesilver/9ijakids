import { combineReducers } from 'redux';
import gameCatalogReducer from './gameCatalog/gameCatalog.reducer';

// root reducer that holds the state object
export default combineReducers({
  gameCatalogData: gameCatalogReducer,
});