import filterFactory from './helpers/models/filter';

import { professionalProjectData, personalProjectData } from './data/projects';

export const personalProjects = filterFactory(personalProjectData);

export const professionalProjects = filterFactory(professionalProjectData);
