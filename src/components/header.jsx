import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import * as UserActions from 'store/modules/user/actions';

import ILogo from '../assets/images/futurebrand-logo-black.svg';
import { Wrapper, Logo } from './styles';

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
      <Wrapper>
        <Logo to="/">
          <img src={ILogo} alt="Logo Future Brand"/>
        </Logo>

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
        <button onClick={btnSetUser}>Set User</button>
      </Wrapper>
    </header>
  );
}
