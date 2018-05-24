import CALCULATOR_IMG from '../assets/thumbnails/personal-projects/calculator.jpg';
import POMODORO_IMG from '../assets/thumbnails/personal-projects/pomodoro-clock.jpg';
import TIMESTAMP_MS_IMG from '../assets/thumbnails/personal-projects/timestamp-microservice.jpg';

import { TYPE_OF_PROJECT } from '../constants';

const { FRONT_END, BACK_END } = TYPE_OF_PROJECT;

export default [
  {
    name: 'Calculator',
    type: FRONT_END,
    description: 'Simple calculator made with React',
    thumbnail: CALCULATOR_IMG,
    demoURL: 'https://mels065.github.io/react-calculator/',
    repoURL: 'https://github.com/mels065/react-calculator',
  },
  {
    name: 'Pomodoro Clock',
    type: FRONT_END,
    description: 'A timer application that utilizes the Pomodoro time management technique',
    thumbnail: POMODORO_IMG,
    demoURL: 'https://mels065.github.io/pomodoro-clock/',
    repoURL: 'https://github.com/mels065/pomodoro-clock',
  },
  {
    name: 'Timestamp Microservice',
    type: BACK_END,
    description:
      'An API that takes a timestamp in either Unix or Natural time and returns a JSON object with both time formats',
    thumbnail: TIMESTAMP_MS_IMG,
    demoURL: 'https://mels-timestamp-microservice.herokuapp.com/',
    repoURL: 'https://github.com/mels065/timestamp-microservice',
  },
];
