import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';

import { toggleDropdownMenu } from '../slices/uiSlice.js';
import logoImg from '../../assets/shared/logo.svg';
import hamburger from '../../assets/shared/icon-hamburger.svg';
import closeIcon from '../../assets/shared/icon-close.svg';

function Nav({ externalClasses = {} }) {
  const navigate = useNavigate();

  const handleClick = (address) => (e) => {
    e.preventDefault();
    navigate(address);
  };

  const { from, classes } = externalClasses;
  const navMod = from === 'dropdownMenu' ? classes[0] : '';
  const flex = from === 'header' ? classes[0] : '';

  const navClasses = cn('nav', 'dropdownMenu__nav', navMod);
  const { pages, currentPageId } = useSelector((state) => state.ui);

  return (
    <nav className={navClasses}>
      <ul className={flex}>
        {pages.map(({ name, id }, index) => {
          const address = name === 'home' ? '/' : `/${name}`;
          const liClasses = cn('dropdownMenu__item', {
            navCurrentItem: id === currentPageId,
          });

          return (
            <li key={id} onClick={handleClick(address)} aria-hidden="true" className={liClasses}>
              <span className="navlink navlink--num dropdownMenu__navlink">
                {`0${index + 1}`}
              </span>
              <a href={address} className="navlink navCurrentItem__navlink">
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  externalClasses: PropTypes.objectOf(PropTypes.any).isRequired,
};

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

function Intro() {
  return (
    <div className="intro flex container__intro">
      <h5 className="intro__phrase phrase">So, you want to travel to</h5>
      <h1 className="intro__title title">Space</h1>
      <p className="intro__description description">
        Let`s face it; if you want to go to space, you might as well genuinely go to
        outer space and not hover kind of on the edge of it. Well sit back, and relax
        because we`ll give you a truly out of this world experience!
      </p>
    </div>
  );
}

function LargeBtn() {
  return (
    <div className="largeBtn">
      <Link to="/destination" className="largeBtnText largeBtn__largeBtnText">
        explore
      </Link>
    </div>
  );
}

function DropdownMenu() {
  const dropdownMenuState = useSelector((state) => state.ui.dropdownMenuState);
  const dispatch = useDispatch();

  const isMenuHidden = () => dropdownMenuState === 'close';

  const handleClick = () => {
    dispatch(toggleDropdownMenu());
  };

  const dropdownMenuClasses = cn('dropdownMenu header__dropdownMenu', {
    'header__dropdownMenu--hidden': isMenuHidden(),
  });

  const externalClasses = {
    classes: ['nav--db'],
    from: 'dropdownMenu',
  };

  return (
    <div className={dropdownMenuClasses}>
      <button type="button" onClick={handleClick} className="dropdownMenu__closeBtn">
        <img src={closeIcon} alt="close button" />
      </button>
      <Nav externalClasses={externalClasses} />
    </div>
  );
}

export default function Home() {
  const width = window.innerWidth;

  const className = width >= 1440 ? 'main flex jc-sa ai-fe' : 'main';

  return (
    <div className="home">
      <div className="container home__container">
        <Header />
        <div className={className}>
          <Intro />
          <LargeBtn />
        </div>
      </div>
    </div>
  );
}
