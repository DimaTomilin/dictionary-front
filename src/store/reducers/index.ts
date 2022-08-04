import { combineReducers } from 'redux';
import { wordReducer } from './wordReducer';

export const rootReducer = combineReducers({
  words: wordReducer,
});

export type rootType = ReturnType<typeof rootReducer>;
