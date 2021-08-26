import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './component/App';
import rootReducer from './reducers';
import { generateRandomNumber, categories } from './list';

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
