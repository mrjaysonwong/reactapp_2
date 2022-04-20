import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <nav className="nav">
      <FontAwesomeIcon icon={faEarthAsia} className='nav__icon'/>
      <p>my travel journal</p>
    </nav>
  );
}
