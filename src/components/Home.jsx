import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';

import { toggleDropdownMenu } from '../slices/uiSlice.js';
import logoImg from '../../assets/shared/logo.svg';
import hamburger from '../../assets/shared/icon-hamburger.svg';
import closeIcon from '../../assets/shared/icon-close.svg';


function Nav({ externalClasses = {} }) {
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
            'navCurrentItem': id === currentPageId,
          });

          return (
            <li key={id} className={liClasses}>
              <span className='navlink navlink--num dropdownMenu__navlink'>
                {`0${index += 1}`}
              </span>
              <Link to={address} className='navlink'>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

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
        <img src={logoImg} alt='logo icon' className='header__logo' />
      </div>
      <Nav externalClasses={externalClasses} />
      <button onClick={handleClick} className="header__button">
        <img src={hamburger} alt="menu button" className='header__hamburger' />
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
    <button className="largeBtn container__largeBtn">
      <Link to="/destination" className="largeBtn__text largeBtnText">explore</Link>
    </button>
  );
}

function DropdownMenu() {
  const dropdownMenuState = useSelector((state) => state.ui.dropdownMenuState);
  const dispatch = useDispatch();

  const isMenuHidden = () => {
    return dropdownMenuState === 'close';
  }

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
      <button onClick={handleClick} className="dropdownMenu__closeBtn">
        <img src={closeIcon} alt="close button" />
      </button>
      <Nav externalClasses={externalClasses} />
    </div>
  );
}

export default function Home() {
  const width = window.innerWidth;

  const className = width >= 1440 ? 'flex jc-sa ai-fe' : '';

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
