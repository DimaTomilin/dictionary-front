import { combineReducers } from 'redux';
import { modeReducer } from './darkModeReducer';
import { wordReducer } from './wordReducer';

export default combineReducers({
  mode: modeReducer,
  words: wordReducer,
});
