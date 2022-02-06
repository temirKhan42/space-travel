import React from 'react';
import { useDispatch } from 'react-redux';

import Nav from './Nav.jsx';
import DropdownMenu from './DropdownMenu.jsx';
import { toggleDropdownMenu } from '../../slices/uiSlice.js';
import logoImg from '../../../assets/shared/logo.svg';
import hamburger from '../../../assets/shared/icon-hamburger.svg';

function Header() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleDropdownMenu());
  };

  const externalClasses = {
    classes: ['flex'],
    from: 'header',
  };

  return (
    <header className="header flex jc-sb ai-c container__header">
      <div className="logo">
        <img src={logoImg} alt="logo icon" className="header__logo" />
      </div>
      <Nav externalClasses={externalClasses} />
      <button type="button" onClick={handleClick} className="header__button">
        <img src={hamburger} alt="menu button" className="header__hamburger" />
      </button>
      <DropdownMenu />
    </header>
  );
}

export default Header;
