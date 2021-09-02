import React from 'react';
import BooksForm from '../containers/BookForm';
import BooksList from '../containers/BookList';

const App = () => (
  <div className="Bookstore-CMS">
    <div className="page-container">
      <div className="content-container">
        <BooksForm />
        <BooksList />
      </div>
    </div>
  </div>
);

export default App;
