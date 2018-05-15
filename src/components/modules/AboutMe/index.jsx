import React from 'react';

import aboutMeTextLines from '../../../data/about-me';

import './style.scss';

const AboutMe = () => (
  <section className="about-me">
    {aboutMeTextLines}
  </section>
);

export default AboutMe;
