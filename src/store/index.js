import { init } from '@rematch/core';
import contacts from '../models/contacts';
import projects from '../models/projects';
import skills from '../models/skills';

const store = init({
  models: {
    contacts,
    projects,
    skills,
  },
});

export default store;
