import PropTypes from 'prop-types';
import { categories } from '../list';

function CategoryFilter({ hamdleFilter }) {
  return (
    <div>
      <span>Filter through the Category: </span>
      <select name="categoryFilter" id="categoryFilter" onChange={handleFilter}>
        {['ALL', ...categories].map(category => <option key={category}>{category}</option>)}
      </select>
    </div>
  );
}
