// Nav elem used by DropdownMenu or Header thats why it has special property in it's props

import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';

const buildListOfLi = (pages, currentPageId, handleClick) => (
  pages.map(({ name, id }, index) => {
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
  })
);

export default function Nav({ externalClasses = {} }) {
  const navigate = useNavigate();

  const handleClick = (address) => (e) => {
    e.preventDefault();
    navigate(address);
  };

  const { from, classes } = externalClasses;
  const navMod = from === 'dropdownMenu' ? classes[0] : '';
  const flex = from === 'header' ? classes[0] : '';

  const navClasses = cn('nav', 'dropdownMenu__nav', navMod);

  // pages from state is a list of objects with 2 fields in each: [{ name, id }, {}, {}]
  const { pages, currentPageId } = useSelector((state) => state.ui);

  return (
    <nav className={navClasses}>
      <ul className={flex}>
        {buildListOfLi(pages, currentPageId, handleClick)}
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  externalClasses: PropTypes.objectOf(PropTypes.any).isRequired,
};
