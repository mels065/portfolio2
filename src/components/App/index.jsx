import React from 'react';

import Header from '../layouts/Header';
import Content from '../layouts/Content';
import Footer from '../layouts/Footer';

import './style.scss';

const App = () => (
  <div className="app">
    <Header />
    <Content />
    <Footer />
  </div>
);

export default App;
