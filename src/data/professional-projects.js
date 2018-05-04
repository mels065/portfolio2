import { TYPE_OF_PROJECT } from '../constants';
import path from 'path';

const { FRONT_END, BACK_END, FULL_STACK } = TYPE_OF_PROJECT;

const THUMBNAIL_PATH = path.join(__dirname, '../assets/thumbnails/professional-projects')

export default [
  {
    name: 'LearnMap',
    type: FULL_STACK,
    description: 'A web application made with Meteor.js for finding or creating learning paths for various skills (particularly web development).',
    thumbnail: path.join(THUMBNAIL_PATH, 'learn-map.jpg'),
    demoURL: 'http://www.learnmap.site/',
    repoURL: 'https://github.com/chingu-coders/Voyage2-Bears-13',
  },
];
