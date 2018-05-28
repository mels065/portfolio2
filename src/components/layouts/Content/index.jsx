import React from 'react';

import AboutMe from '../../modules/AboutMe';
import ProfessionalProjectsContainer from '../../containers/ProfessionalProjectsContainer';
import PersonalProjectsContainer from '../../containers/PersonalProjectsContainer';

import './style.scss';

const Content = () => (
  <main className="content">
    <AboutMe />
    <ProfessionalProjectsContainer />
    <PersonalProjectsContainer />
  </main>
);

export default Content;
