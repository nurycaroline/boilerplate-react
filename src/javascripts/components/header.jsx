import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import * as UserActions from 'store/modules/user/actions';

export default function Header() {
  const dispatch = useDispatch();

  function btnSetUser() {
    dispatch(UserActions.setUser({
      logged: true,
      name: 'Gerson Lima',
      token: 'asd98f7as9d87f89asd89f7a98s7df7a'
    }));
  }

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
        <button onClick={btnSetUser}>setUser</button>
      </div>
    </header>
  );
}
