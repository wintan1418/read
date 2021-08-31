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
    title: 'Lion Of Tanzania',
    category: 'Fantazy',
  },
  {
    bookID: Math.floor(Math.random() * 1000),
    title: 'The New Horizon',
    category: 'Action',
  },
  {
    bookID: Math.floor(Math.random() * 1000),
    title: 'Human Anatomie',
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
