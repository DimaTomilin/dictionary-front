import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { weatherReducer } from './reducers/weatherReducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { consoleMiddleware } from './middleware/fetchCitiesMiddleware';

const middlewareEnhancer = applyMiddleware(consoleMiddleware);

const store = createStore(weatherReducer, middlewareEnhancer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
