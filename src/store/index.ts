import { applyMiddleware, createStore ,Middleware, AnyAction } from 'redux';
import { rootReducer } from './reducers';
import thunk ,  { ThunkMiddleware } from 'redux-thunk';
import logger from 'redux-logger';

export const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk as ThunkMiddleware<any, AnyAction>,
    logger as unknown as Middleware
  )
);