import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../action/index';
import { bookCategories } from '../aid/index';
import './BookForm.css';

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
    <div className="form-container">
      <h3>ADD NEW BOOK</h3>
      <form className="form">
        <input
          type="text"
          placeholder="Book Title"
          className="title-field"
          value={title}
          onChange={handleTitleChange}
        />
        <select
          placeholder="Category"
          className="select-input"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="">
            Category
          </option>
          {
            bookCategories.map(category => (
              <option key={`key-${category}`} value={category}>
                {category}
              </option>
            ))
          }
        </select>
        <button
          className="button"
          type="button"
          onClick={handleSubmit}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

BookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = { createBook };

export default connect(null, mapDispatchToProps)(BookForm);
