import React from 'react';

import NavBarLink from './NavBarLink';

import LINKS from '../../../data/links';

import './style.scss';

const NavBar = () => (
  <nav className="nav-bar">
    {LINKS.map(link => <NavBarLink {...link} />)}
  </nav>
);

export default NavBar;
