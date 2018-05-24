import React from 'react';

import AboutMe from '../../modules/AboutMe';
import Projects from '../../modules/Projects';

import professionalProjects from '../../../data/professional-projects';
import personalProjects from '../../../data/personal-projects';

import './style.scss';

const Content = () => (
  <main className="content">
    <AboutMe />
    <Projects type="Professional Projects" projects={professionalProjects} />
    <Projects type="Personal Projects" projects={personalProjects} />
  </main>
);

export default Content;
