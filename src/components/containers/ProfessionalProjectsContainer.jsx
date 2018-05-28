import { connect } from 'react-redux';

import Projects from '../modules/Projects';

const mapState = ({ professionalProjects }) => ({
  type: 'Professional Projects',
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
