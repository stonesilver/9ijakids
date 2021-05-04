import React from 'react';
import FilterColumn from '../filterColumn/filterColumn.component';
import GamesColumn from '../gamesColumn/gamesColumn.component'
import './gamesCatalog.styles.scss';

const GamesCatalog = () => (
  <div className='games-catalog'>
    <h2 className='games-catalog-header'>Games Catalog</h2>
    <div className='games-catalog-container'>
      <FilterColumn />
      <GamesColumn />
    </div>
  </div>
);

export default GamesCatalog;
