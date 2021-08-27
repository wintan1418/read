import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../component/Book';
import { removeBook } from '../action';
import { generateRandomNumber } from '../list';

const BookList = ({ books, deleteBook }) => {
  const handleRemoveBook = id => deleteBook(id);

  const allBooks = books.map(book => (
    <Book
      id={generateRandomNumber()}
      handleRemoveBook={handleRemoveBook}
      book={book}
      key={generateRandomNumber()}
    />
  ));
  return (
    <table>
      <thead>
        <tr>
          <th>BookID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {allBooks}
      </tbody>
      {
    books.map(book => (
      <Book
        bookID={book.bookID}
        key={book.bookID}
        title={book.title}
        category={book.category}
      />
    ))
  }
    </table>

  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  deleteBook: id => dispatch(removeBook(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
