import PropTypes from 'prop-types';
import React from 'react';

function Book({ book, handleRemoveBook }) {
  const {
    id, title, category,
  } = book;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td><button onClick={() => handleRemoveBook(id)} type="button">Delete</button></td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};
export default Book;
