import React from 'react';

import AboutMe from '../../modules/AboutMe';
import Projects from '../../modules/Projects';

import './style.scss';

const Content = () => (
  <main className="content">
    <AboutMe />
    <Projects type="Professional Projects" />
    <Projects type="Personal Projects" />
  </main>
);

export default Content;
