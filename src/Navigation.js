import React from 'react';
import './Navigation.css';

const Header = () => (
  <div className="header-container">
    <ul className="header">
      <li className="header__logo header__link">
        Your library
      </li>
      <li className="header__book_link header__link">
        BOOKS
      </li>
      <li className="header__link">
        CATEGORIES
      </li>
    </ul>
    <div className="user">
      <span className="user-logo" />
    </div>
  </div>
);

export default Header;
