import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/shared/logo.svg';
import hamburger from '../../assets/shared/icon-hamburger.svg';
import closeIcon from '../../assets/shared/icon-close.svg';

function Nav() {
  return (
    <nav className="nav nav--dropdownMenu">
      <ul>
        <li>
          <span className="navlink nav__navlink navlink--num">01</span>
          <Link to="/" className="navlink">
            Home
          </Link>
        </li>
        <li>
          <span className="navlink nav__navlink navlink--num">02</span>
          <Link to="destination" className="navlink">
            Destination
          </Link>
        </li>
        <li>
          <span className="navlink nav__navlink navlink--num">03</span>
          <Link to="/crew" className="navlink">
            Crew
          </Link>
        </li>
        <li>
          <span className="navlink nav__navlink navlink--num">04</span>
          <Link to="technology" className="navlink">
            Technology
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function Menu() {
  return (
    <header className="menu flex jc-sb container__menu">
      <img src={logoImg} alt='logo icon' className='menu__logo' />
      <Nav />
      <button className="menu__button">
        <img src={hamburger} alt="menu button" className='menu__hamburger' />
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
      <span className="largeBtn__text mainBtnText">explore</span>
    </button>
  );
}

function DropdownMenu() {
  return (
    <div className="dropdownMenu menu__dropdownMenu">
      <button className="dropdownMenu__closeBtn">
        <img src={closeIcon} alt="close button" />
      </button>
      <Nav />
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
