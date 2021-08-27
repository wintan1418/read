import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../action';
import { categories, generateRandomNumber } from '../list';

const initialValue = {
  author: '',
  category: '',

}; const BookForm = ({ createBook }) => {
  const [input, setInput] = useState(initialValue);
  const allCategories = categories.map(category => (
    <option
      key={generateRandomNumber()}
      value={category}
    >
      {category}
    </option>
  ));
  const handleChange = b => {
    const { value } = b.target;
    setInput({ ...input, [b.target.name]: value.toUpperCase() });
  }; const validateInputError = () => {
    const { title, category } = input;
    let error = '';
    if (!title) {
      error = 'You must need give a Title,please';
    } else if (title.length < 5) {
      error = 'Title length too short,input no less than five character';
    } else if (!category) {
      error = 'You must need give the category of this book';
    } else if (category.length < 3) {
      error = 'Too short!';
    }
    return error;
  }; const handleSubmit = b => {
    b.preventDefault();
    const error = validateInputError();
    if (!error) {
      createBook({ ...input, id: generateRandomNumber() });
      setInput(initialValue);
    } else {
      document.querySelector('#error').textContent = error;
    }
  }; return (
    <div>
      <form onSubmit={handleSubmit}>
        <p id="error" />
        <input type="text" name="title" value={input.title} placeholder="Input your title" onChange={handleChange} />
        <select name="category" id="category" value={input.category} placeholder="Category" onChange={handleChange}>
          {allCategories}
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}; BookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
}; const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
}); export default connect(null, mapDispatchToProps)(BookForm);
