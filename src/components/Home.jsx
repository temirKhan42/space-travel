import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/shared/logo.svg';
import hamburger from '../../assets/shared/icon-hamburger.svg';
import closeIcon from '../../assets/shared/icon-close.svg';
import cn from 'classnames';

function Nav({ classMod = '' }) {
  const navClasses = cn('nav', 'dropdownMenu__nav', classMod);

  return (
    <nav className={navClasses}>
      <ul>
        <li className="dropdownMenu__item">
          <Link to="/" className="navlink nav__navlink" autofocus>
            Home
          </Link>
        </li>
        <li className="dropdownMenu__item">
          <Link to="/destination" className="navlink nav__navlink">
            Destination
          </Link>
        </li>
        <li className="dropdownMenu__item">
          <Link to="/crew" className="navlink nav__navlink">
            Crew
          </Link>
        </li>
        <li className="dropdownMenu__item">
          <Link to="/technology" className="navlink nav__navlink">
            Technology
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function Menu() {
  const [isMenuHide, setIsMenuHide] = useState(true);

  const handleClick = () => {
    setIsMenuHide(!isMenuHide);
  };

  return (
    <header className="menu flex jc-sb container__menu">
      <img src={logoImg} alt='logo icon' className='menu__logo' />
      <Nav />
      <button onClick={handleClick} className="menu__button">
        <img src={hamburger} alt="menu button" className='menu__hamburger' />
      </button>
      <DropdownMenu isMenuHide={isMenuHide} setIsMenuHide={setIsMenuHide} />
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
      <Link to="/destination" className="largeBtn__text mainBtnText">explore</Link>
    </button>
  );
}

function DropdownMenu({ isMenuHide, setIsMenuHide }) {
  const handleClick = () => {
    setIsMenuHide(!isMenuHide);
  };

  const dropdownMenuClasses = cn('dropdownMenu menu__dropdownMenu', { 
    'menu__dropdownMenu--hidden': isMenuHide,
  });

  return (
    <div className={dropdownMenuClasses}>
      <button onClick={handleClick} className="dropdownMenu__closeBtn">
        <img src={closeIcon} alt="close button" />
      </button>
      <Nav classMod='nav--dropdownMenu' />
    </div>
  );
}

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <Menu />
        <Intro />
        <LargeBtn />
      </div>
    </div>
  );
}
