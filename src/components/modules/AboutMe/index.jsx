import React from 'react';

import aboutMeTextLines from '../../../data/about-me';

import './style.scss';

const AboutMe = () => (
  <section className="about-me">
    <h3>About Me</h3>
    {aboutMeTextLines}
  </section>
);

export default AboutMe;
