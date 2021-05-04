import React from 'react';
import { connect } from 'react-redux';
import {
  displayHamburgMenu,
  setSearchBarValue,
  searchGames,
} from '../../redux/gameCatalog/action';
import './nav.styles.scss';

const Nav = ({ searchValue, searchBarOnChange, onFormSubmit }) => (
  <div className='nav'>
    <input type='checkbox' id='nav-check' />
    <div className='nav-header'>
      <div className='nav-title'>
        <img
          src='https://partners.9ijakids.com/images/logo.png'
          alt='logo'
          className='logo'
        />
      </div>
    </div>
    <div className='nav-btn'>
      <label htmlFor='nav-check'>
        <span className='first'></span>
        <span className='second'></span>
        <span className='third'></span>
      </label>
    </div>

    <div className='nav-links'>
      <p>Home</p>
      <p>Subscription</p>
      <p>Login</p>
      <p>SignUp</p>
      <form
        action=''
        className='search-form'
        onSubmit={(e) => {
          e.preventDefault();
          onFormSubmit();
        }}
      >
        <input
          type='text'
          placeholder='Search...'
          value={searchValue}
          onChange={(e) => searchBarOnChange(e.target.value)}
        />
        <button type='submit' className='search-form-btn'>
          Search
        </button>
      </form>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  showHamburger: state.gameCatalogData.displayHamburgMenu,
  searchValue: state.gameCatalogData.searchBarValue,
});

const dispatchStateToProps = (dispatch) => ({
  displayHamburgMenu: () => dispatch(displayHamburgMenu()),
  searchBarOnChange: (value) => dispatch(setSearchBarValue(value)),
  onFormSubmit: () => dispatch(searchGames()),
});

export default connect(mapStateToProps, dispatchStateToProps)(Nav);
