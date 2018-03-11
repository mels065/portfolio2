import React from 'react';

import { Container } from 'semantic-ui-react';

const Copyright = () => (
  <Container className="copyright" as="div" textAlign="right">
    Brandon Mellus &copy;{
      (() => {
        const currentYear = new Date().getFullYear();
        return currentYear === 2018 ? '2018' : `2018-${currentYear}`;
      })()
    }
  </Container>
);

export default Copyright;
