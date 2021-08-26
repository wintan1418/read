import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './component/App';
// eslint-disable-next-line import/no-cycle
import rootReducer from './reducers';

export const generateRandomNumber = (range = 10000) => Math.floor(Math.random() * range);

export const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const INITIAL_STATE = {
  defaultBooks: [
    {
      bookID: generateRandomNumber(),
      title: 'SHERLOCK OF HOLMES',
      category: categories[generateRandomNumber(categories.length)],
    },
    {
      bookID: generateRandomNumber(),
      title: 'INTO THE MULTIVERSE',
      category: categories[generateRandomNumber(categories.length)],
    },
    {
      bookID: generateRandomNumber(),
      title: 'DANCE WITH ME',
      category: categories[generateRandomNumber(categories.length)],
    },
    {
      bookID: generateRandomNumber(),
      title: 'THE DILENMA OF REVIEWS,THEY MAKE STRONG',
      category: categories[generateRandomNumber(categories.length)],
    },

  ],
};

const store = createStore(
  rootReducer, INITIAL_STATE,
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
