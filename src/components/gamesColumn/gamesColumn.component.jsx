import React, { useEffect } from 'react';
import GameCard from '../gameCard/gameCard.component';
import { connect } from 'react-redux';
import fetchGameData from '../../redux/gameCatalog/fetchGameData';
import './gamesColumn.styles.scss';

const GamesColumn = ({ gameData, dataOnDisplay, fetchPending }) => {
  const arrayToLoad = fetchPending ? [...Array(6).keys()] : dataOnDisplay;
  useEffect(() => {
    gameData();
  }, [gameData]);
  return (
    <div
      className={`games-column ${!arrayToLoad.length ? 'no-game-grid' : ''}`}
    >
      {arrayToLoad.length ? (
        arrayToLoad.map(({ GameDescription, GameTitle, GameImage }, i) => (
          <GameCard
            key={i}
            GameDescription={GameDescription}
            GameTitle={GameTitle}
            GameImage={GameImage}
          />
        ))
      ) : (
        <div className='no-game'>
          No game to Show. Enter another parameter....
        </div>
      )}
    </div>
  );
};

const mapStatetoProps = (state) => ({
  dataOnDisplay: state.gameCatalogData.gameCatalogOnDisplay,
  fetchPending: state.gameCatalogData.pending,
});

const mapDispatchToprops = (dispatch) => ({
  gameData: () => dispatch(fetchGameData()),
});

export default connect(mapStatetoProps, mapDispatchToprops)(GamesColumn);
