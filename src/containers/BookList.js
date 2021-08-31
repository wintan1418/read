import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../component/Book';
import { removeBook, filterBook } from '../action/index';
import CategoryFilter from '../component/categoryFilters';
import { getFilteredBooks } from '../aid/index';

const BookList = ({
  books,
  filter,
  removeBook,
  filterBook,
}) => {
  const filteredBooks = getFilteredBooks(books, filter);

  return (
    <div>
      <CategoryFilter handleFilterChange={filterBook} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

          {' '}
          {
            filteredBooks.map(book => (
              <Book
                key={book.bookID}
                bookID={book.bookID}
                title={book.title}
                category={book.category}
                handleRemoveBook={removeBook}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
  filterBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

BookList.defaultProps = {
  books: [],
};

const mapDispatchToProps = { removeBook, filterBook };

const mapStateToProps = ({ books, filter }) => ({
  books,
  filter,
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
