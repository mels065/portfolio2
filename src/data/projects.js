/* eslint-disable no-console */

import LEARN_MAP_IMG from '../assets/thumbnails/professional-projects/learn-map.jpg';
import CALCULATOR_IMG from '../assets/thumbnails/personal-projects/calculator.jpg';
import POMODORO_IMG from '../assets/thumbnails/personal-projects/pomodoro-clock.jpg';
import TIMESTAMP_MS_IMG from '../assets/thumbnails/personal-projects/timestamp-microservice.jpg';

const {
  TYPE_OF_PROJECT: { FRONT_END, BACK_END, FULL_STACK },
} = require('../constants');

class ProjectData {
  constructor(props) {
    function validateType() {
      return [FRONT_END, BACK_END, FULL_STACK].includes(props.type);
    }
    function validateThumbnail() {
      return /^.+\.jpg$/.test(props.thumbnail);
    }
    function validateURL(url) {
      /* eslint-disable no-useless-escape */
      return /^https?:\/\/(?:www\.)?(?:[\w\-]+\.)+(?:com|org|edu|io|site)(?:\/[\w\-]*|(?:\/[\w\-]+)(?:\/[\w\-]+)*\/?)?$/.test(url);
      /* eslint-enable no-useless-escape */
    }

    try {
      const has = Object.prototype.hasOwnProperty.bind(props);
      const getErrorMsg = key => `Props for ProjectData are not valid: ${key} is not valid`;

      if (!(has('name') && typeof props.name === 'string')) throw new Error(getErrorMsg('name'));
      if (!(has('type') && validateType())) throw new Error(getErrorMsg('type'));
      if (!(has('description') && typeof props.description === 'string')) {
        throw new Error(getErrorMsg('description'));
      }
      if (!(has('thumbnail') && validateThumbnail())) throw new Error(getErrorMsg('thumbnail'));
      if (!(has('demoURL') && validateURL(props.demoURL))) throw new Error(getErrorMsg('demoURL'));
      if (!(has('repoURL') && validateURL(props.repoURL))) throw new Error(getErrorMsg('repoURL'));

      this.name = props.name;
      this.type = props.type;
      this.description = props.description;
      this.thumbnail = props.thumbnail;
      this.demoURL = props.demoURL;
      this.repoURL = props.repoURL;
    } catch (err) {
      console.error(err);
    }
  }
}

export const professionalProjectData = [
  new ProjectData({
    name: 'LearnMap',
    type: FULL_STACK,
    description:
      'A web application made with Meteor.js for finding or creating learning paths for various skills (particularly web development).',
    thumbnail: LEARN_MAP_IMG,
    demoURL: 'http://www.learnmap.site/',
    repoURL: 'https://github.com/chingu-coders/Voyage2-Bears-13',
  }),
];

export const personalProjectData = [
  new ProjectData({
    name: 'Calculator',
    type: FRONT_END,
    description: 'Simple calculator made with React',
    thumbnail: CALCULATOR_IMG,
    demoURL: 'https://mels065.github.io/react-calculator/',
    repoURL: 'https://github.com/mels065/react-calculator',
  }),
  new ProjectData({
    name: 'Pomodoro Clock',
    type: FRONT_END,
    description: 'A timer application that utilizes the Pomodoro time management technique',
    thumbnail: POMODORO_IMG,
    demoURL: 'https://mels065.github.io/pomodoro-clock/',
    repoURL: 'https://github.com/mels065/pomodoro-clock',
  }),
  new ProjectData({
    name: 'Timestamp Microservice',
    type: BACK_END,
    description:
      'An API that takes a timestamp in either Unix or Natural time and returns a JSON object with both time formats',
    thumbnail: TIMESTAMP_MS_IMG,
    demoURL: 'https://mels-timestamp-microservice.herokuapp.com/',
    repoURL: 'https://github.com/mels065/timestamp-microservice',
  }),
];
