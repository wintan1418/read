import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { bookCategories } from '../aid/index';

const CategoryFilter = ({ handleFilterChange }) => {
  const [text, setText] = useState('All');

  const handleTextChange = e => {
    const { target: { value } } = e;

    handleFilterChange(value);

    setText(value);
  };

  return (
    <select
      value={text}
      onChange={handleTextChange}
    >
      <option value="All">category</option>
      {
        bookCategories.map(book => (
          <option
            key={book}
            value={book}
          >
            {book}
          </option>
        ))
      }
    </select>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
