import path from 'path';

import { TYPE_OF_PROJECT } from '../constants';

const { FRONT_END, BACK_END, FULL_STACK } = TYPE_OF_PROJECT;

const THUMBNAIL_PATH = path.join(__dirname, '../assets/thumbnails/personal-projects');

export default [
  {
    name: 'Calculator',
    type: FRONT_END,
    description: 'Simple calculator made with React',
    thumbnail: path.join(THUMBNAIL_PATH, 'calculator.jpg'),
    demoURL: 'https://mels065.github.io/react-calculator/',
    repoURL: 'https://github.com/mels065/react-calculator',
  },
  {
    name: 'Pomodoro Clock',
    type: FRONT_END,
    description: 'A timer application that utilizes the Pomodoro time management technique',
    thumbnail: path.join(THUMBNAIL_PATH, 'pomodoro-clock.jpg'),
    demoURL: 'https://mels065.github.io/pomodoro-clock/',
    repoURL: 'https://github.com/mels065/pomodoro-clock',
  },
  {
    name: 'Timestamp Microservice',
    type: BACK_END,
    description: 'An API that takes a timestamp in either Unix or Natural time and returns a JSON object with both time formats',
    thumbnail: path.join(THUMBNAIL_PATH, 'timestamp-microservice.jpg'),
    demoURL: 'https://mels-timestamp-microservice.herokuapp.com/',
    repoURL: 'https://github.com/mels065/timestamp-microservice',
  },
];
