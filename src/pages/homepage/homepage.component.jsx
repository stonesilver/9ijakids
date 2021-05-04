import React from 'react';
import Nav from '../../components/nav/nav.component';
import GamesCatalog from '../../components/gamesCatalog/gamesCatalog.component';
import './homepage.styles.scss';

const Homepage = () => (
  <div className='homepage'>
    <Nav />
    <GamesCatalog />
  </div>
);

export default Homepage;
