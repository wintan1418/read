import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../action/index';
import { bookCategories } from '../aid/index';

const BookForm = ({ createBook }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleTitleChange = event => {
    setTitle(() => event.target.value);
  };

  const handleCategoryChange = event => {
    setCategory(() => event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (title && category) {
      createBook({
        bookID: Math.floor(Math.random() * 1000),
        title,
        category,
      });

      setTitle('');
      setCategory('');
    }
  };

  return (
    <form>
      <div className="input-group">
        <input
          type="text"
          placeholder="input your title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="input-group">
        <select
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="">
            none
          </option>
          {
            bookCategories.map(category => (
              <option key={`key-${category}`} value={category}>
                {category}
              </option>
            ))
          }
        </select>
      </div>
      <button
        type="button"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
};

BookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = { createBook };

export default connect(null, mapDispatchToProps)(BookForm);
