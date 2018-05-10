import React from 'react';

import NavBar from '../../modules/NavBar';
import Jumbotron from '../../modules/Jumbotron';

import './style.scss';

const Header = () => (
  <header className="header">
    <NavBar />
    <Jumbotron />
  </header>
);

export default Header;
