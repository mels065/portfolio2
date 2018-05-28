import { connect } from 'react-redux';

import Projects from '../modules/Projects';

const {
  TYPE_OF_PROJECT_GROUP: { PERSONAL_PROJECTS },
} = require('../../constants');

const mapState = ({ personalProjects }) => ({
  type: PERSONAL_PROJECTS,
  projects: personalProjects.projects,
  currentFilter: personalProjects.currentFilter,
});

const mapDispatch = ({
  personalProjects: {
    removeFilter, filterFrontEnd, filterBackEnd, filterFullStack,
  },
}) => ({
  removeFilter,
  filterFrontEnd,
  filterBackEnd,
  filterFullStack,
});

const PersonalProjects = connect(mapState, mapDispatch)(Projects);

export default PersonalProjects;
