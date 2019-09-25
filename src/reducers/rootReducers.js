import { combineReducers } from 'redux';
import playerReducer from './player.reducer';
const rootReducer = combineReducers({
  playerReducer,
});

export default rootReducer;
