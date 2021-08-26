import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../component/Book';

const BookList = ({ books }) => (
  <table>
    <tr>
      <th>BookID</th>
      <th>Title</th>
      <th>Category</th>
    </tr>
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
BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
};

BookList.defaultProps = {
  books: [],
};

const mapStateToProps = ({ books }) => ({
  books,
});

export default connect(mapStateToProps)(BookList);
