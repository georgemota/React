import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Mi Logo</h1>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#opcion1" className="nav-link">Opción 1</a>
            </li>
            <li className="nav-item">
              <a href="#opcion2" className="nav-link">Opción 2</a>
            </li>
            <li className="nav-item">
              <a href="#opcion3" className="nav-link">Opción 3</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
