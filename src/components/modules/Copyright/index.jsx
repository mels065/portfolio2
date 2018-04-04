import React from 'react';

import './style.scss';

const Copyright = () => (
  <div className="copyright">
    Brandon Mellus &copy;{
      (() => {
        const currentYear = new Date().getFullYear();
        return currentYear === 2018 ? '2018' : `2018-${currentYear}`;
      })()
    }
  </div>
);

export default Copyright;
