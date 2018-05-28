const {
  TYPE_OF_PROJECT_GROUP: { PROFESSIONAL_PROJECTS, PERSONAL_PROJECTS },
} = require('../constants');

export default [
  {
    text: 'About Me',
    link: '#AboutMe',
  },
  {
    text: PROFESSIONAL_PROJECTS,
    link: `#${PROFESSIONAL_PROJECTS.split(' ').join('')}`,
  },
  {
    text: PERSONAL_PROJECTS,
    link: `#${PERSONAL_PROJECTS.split(' ').join('')}`,
  },
  {
    text: 'Contact Me',
    link: '#ContactMe',
  },
];
