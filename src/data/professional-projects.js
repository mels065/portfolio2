import { TYPE_OF_PROJECT } from '../constants';

import LEARN_MAP_IMG from '../assets/thumbnails/professional-projects/learn-map.jpg';

const { FULL_STACK } = TYPE_OF_PROJECT;

export default [
  {
    name: 'LearnMap',
    type: FULL_STACK,
    description:
      'A web application made with Meteor.js for finding or creating learning paths for various skills (particularly web development).',
    thumbnail: LEARN_MAP_IMG,
    demoURL: 'http://www.learnmap.site/',
    repoURL: 'https://github.com/chingu-coders/Voyage2-Bears-13',
  },
];
