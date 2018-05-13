import React from 'react';

import NavBarLink from './NavBarLink';

import LINKS from '../../../data/links';

import './style.scss';

const NavBar = () => (
  <nav className="nav-bar">
    <ul>
      {LINKS.map(link => (
        <NavBarLink
          key={link.text.toLowerCase().split(' ').join('-')}
          {...link}
        />
      ))
    }
    </ul>
  </nav>
);

export default NavBar;
