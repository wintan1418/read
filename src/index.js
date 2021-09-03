import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './component/App';
import reportWebVitals from './reportWebVitals';
import store from './reducers/index';
import { createBook } from './action/index';
import './index.css';

const intialState = [
  {
    bookID: Math.floor(Math.random() * 1000),
    title: 'king of boys',
    category: 'Politics',
  },
  {
    bookID: Math.floor(Math.random() * 1000),
    title: 'hallowen',
    category: 'Action',
  },
  {
    bookID: Math.floor(Math.random() * 1000),
    title: 'entomoogy',
    category: 'Learning',
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
