import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';

import Nav from './Nav.jsx';
import { toggleDropdownMenu } from '../../slices/uiSlice.js';
import closeIcon from '../../../assets/shared/icon-close.svg';

export default function DropdownMenu() {
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
