import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/shared/logo.svg';

function Menu() {
  return (
    <header className="menu">
      <div className="menu__image">
        <img src={logoImg} className='menu__logo'></img>
      </div>
      <div className="menu__list">
        <ul>
          <li className="menu__item">
            <Link to="/">Home</Link>
          </li>
          <li className="menu__item">
            <Link to="destination">Destination</Link>
          </li>
          <li className="menu__item">
            <Link to="/crew">Crew</Link>
          </li>
          <li className="menu__item">
            <Link to="technology">Technology</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

function Description() {
  return (
    <div>Desc</div>
  );
}

function LargeButton() {
  return (
    <div>BTN</div>
  );
}

export default function Home() {
  return (
    <div className="App">
      <div className="container">
        <Menu />
        <Description />
        <LargeButton />
      </div>
    </div>
  );
}
