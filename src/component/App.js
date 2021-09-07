import React from 'react';
import BooksForm from '../containers/BookForm';
import BooksList from '../containers/BookList';
import Navigation from '../Navigation';
import './App.css';

const App = () => (
  <div className="App-container">
    <div className="page-container">
      <Navigation />
      <div className="content-container">
        <BooksList />
        <div className="line">
          <BooksForm />
        </div>
      </div>
    </div>
  </div>
);

export default App;
