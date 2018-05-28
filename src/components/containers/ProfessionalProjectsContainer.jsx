import { connect } from 'react-redux';

import Projects from '../modules/Projects';

const {
  TYPE_OF_PROJECT_GROUP: { PROFESSIONAL_PROJECTS },
} = require('../../constants');

const mapState = ({ professionalProjects }) => ({
  type: PROFESSIONAL_PROJECTS,
  projects: professionalProjects.projects,
  currentFilter: professionalProjects.currentFilter,
});

const mapDispatch = ({
  professionalProjects: {
    removeFilter, filterFrontEnd, filterBackEnd, filterFullStack,
  },
}) => ({
  removeFilter,
  filterFrontEnd,
  filterBackEnd,
  filterFullStack,
});

const ProfessionalProjects = connect(mapState, mapDispatch)(Projects);

export default ProfessionalProjects;
