import React from 'react';
import PropTypes from 'prop-types';
import CategoryFilter from './component/categoryFilters';
import './Navigation.css';

const Header = ({ handleFilter }) => (
  <div className="header-container">
    <ul className="header">
      <li className="header__logo header__link">
        Your library
      </li>
      <li className="header__book_link header__link">
        BOOKS
      </li>
      <CategoryFilter handleFilter={handleFilter} />
    </ul>
    <div className="user">
      <span className="user-logo">
        <img src="https://th.bing.com/th/id/OIP.0PQ2zvxDAtM_hsQ_aqIpWgAAAA?pid=ImgDet&w=170&h=170&c=7" alt="dip" />
      </span>
    </div>
  </div>
);
Header.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default Header;
