import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../component/Book';
import { removeBook, filterBook } from '../action';
import { generateRandomNumber, filterBooksByCategory } from '../list';
import Filter from '../component/categoryFilters';

const BookList = ({
  books, deleteBook, filterBook, filterParam,
}) => {
  const handleRemoveBook = id => deleteBook(id);
  const handleFilter = b => filterBook(b.target.value);

  const filteredBooks = filterParam === 'All' ? books : filterBooksByCategory(books, filterParam);

  const allBooks = filteredBooks.map(book => (
    <Book
      id={generateRandomNumber()}
      handleRemoveBook={handleRemoveBook}
      book={book}
      key={generateRandomNumber()}
    />
  ));
  return (
    <div>
      <Filter handleFilter={handleFilter} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allBooks}
        </tbody>
      </table>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteBook: PropTypes.func.isRequired,
  filterBook: PropTypes.func.isRequired,
  filterParam: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filterParam: state.filter,
});

const mapDispatchToProps = dispatch => ({
  deleteBook: id => dispatch(removeBook(id)),
  filterBook: category => dispatch(filterBook(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
