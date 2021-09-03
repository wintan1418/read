import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  bookID,
  title,
  category,
  handleRemoveBook,
}) => (
  <div className="book-container">
    <div className="book-details">
      <div>
        <div className="category">{category}</div>
        <div className="title">{title}</div>
        <div className="author">author X</div>
        <div className="target-category">{ category }</div>
      </div>
      <div className="actions">
        <button
          type="button"
          >
          comments
        </button>
        <button
          type="button"
          onClick={() => {
            const book = {
              bookID,
              title,
              category,
            };

            handleRemoveBook(book);
          }}
        >
  <tr>
    <td>{bookID}</td>
    <td>{title}</td>
    <td>{category}</td>
    <td>
      <button
        onClick={() => {
          const book = {
            bookID,
            title,
            category,
          };

          handleRemoveBook(book);
        }}
        type="button"
      >
        Remove
      </button>
    </td>
  </tr>
);

Book.propTypes = {
  bookID: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
