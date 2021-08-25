import React from 'react';

const bookCategories = [
  'Action',
  'History',
  'Biography',
  'Sci-fi',
  'Horror',
  'Kids',
  'Learniing',
];

const BookForm = () => (
  <form>
    <div className="input-group">
      <input type="text" />
    </div>
    <div className="input-group">
      <select name="book-categories" id="categories">
        {
          bookCategories.map(category => (
            <option key={`key-${category}`} value={category}>
              {category}
            </option>
          ))
        }
      </select>
    </div>
    <button type="button">Submit</button>
  </form>
);

export default BookForm;
