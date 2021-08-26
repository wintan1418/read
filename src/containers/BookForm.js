import React from 'react';
import { categories, generateRandomNumber } from '../list';

const BookForm = () => {
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
