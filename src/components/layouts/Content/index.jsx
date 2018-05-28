import React from 'react';

import AboutMe from '../../modules/AboutMe';
import Projects from '../../modules/Projects';
import ProfessionalProjectsContainer from '../../containers/ProfessionalProjectsContainer';

import './style.scss';

import { personalProjectData } from '../../../data/projects';

const {
  TYPE_OF_PROJECT_GROUP: { PERSONAL_PROJECTS },
} = require('../../../constants');

const Content = () => (
  <main className="content">
    <AboutMe />
    <ProfessionalProjectsContainer />
    <Projects type={PERSONAL_PROJECTS} projects={personalProjectData} />
  </main>
);

export default Content;
