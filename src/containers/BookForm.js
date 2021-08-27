import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addBook } from '../actions';
import { categories, generateRandomNumber } from '../list';

const initialValue = {
  author: '',
  category: '',

}; const BookForm = ({ createBook }) => {
  const [Input, setInput] = useState(initialValue);
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
    setInput({ ...input, [e.target.name]: value.toUpperCase() });
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
  };
  return (
    <div>
      <form action="">
        <input type="text" name="title" placeholder="Input your title" />
        <select name="category" id="category" placeholder="Category">
          {allCategories}
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};
export default BookForm;
