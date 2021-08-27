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
