import React from 'react';
import './gameCard.styles.scss';

const GameCard = ({ GameDescription, GameTitle, GameImage }) => (
  <div className='game-card'>
    <div className='game-card-img-container'>
      <img src={GameImage} alt={GameTitle} className='game-card-img-container-img' />
    </div>
    <div className='game-card-body'>
      <div className='game-card-body-title'>{GameTitle}</div>
      <div className='game-card-body-description'>{GameDescription}</div>
    </div>
  </div>
);

export default GameCard;
