import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './component/App';
import reportWebVitals from './reportWebVitals';
import store from './reducers/index';
import { createBook } from './action/index';

const intialState = [
  {
    bookID: Math.floor(Math.random() * 1000),
    title: 'CHRONICLES OF CAMMUS',
    category: 'Fantassy',
  },
  {
    bookID: Math.floor(Math.random() * 1000),
    title: 'Fast & Furious',
    category: 'Action',
  },
  {
    bookID: Math.floor(Math.random() * 1000),
    title: 'HUMAN GENETICS',
    category: 'Learning',
  },
  {
    bookID: Math.floor(Math.random() * 1000),
    title: 'Power Rangers',
    category: 'Kids',
  },
];

intialState.map(book => store.dispatch(createBook(book)));

const jsx = (
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

ReactDOM.render(
  jsx,
  document.getElementById('root'),
);

reportWebVitals();
