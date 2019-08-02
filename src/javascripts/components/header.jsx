import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-wrapper">
        <h1 className="header-logo">
          <Link to="/" className="header-logo__btn">
            Logo
          </Link>
        </h1>

        <nav className="header-nav">
          <ul className="header-nav-items">
            <li className="header-nav-item">
              <Link to="/" className="header-nav__btn">
                Página Inicial
              </Link>
            </li>
            <li className="header-nav-item">
              <Link to="/contato" className="header-nav__btn">
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
