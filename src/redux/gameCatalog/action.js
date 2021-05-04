import { gameCatalogActionTypes } from './actionTypes';

export const fetchDataPending = () => {
  return {
    type: gameCatalogActionTypes.FETCH_DATA_PENDING,
  };
};

export const fetchDataSuccess = (data) => {
  return {
    type: gameCatalogActionTypes.FETCH_DATA_SUCCESS,
    payload: data,
  };
};

export const fetchDataError = (error) => {
  return {
    type: gameCatalogActionTypes.FETCH_DATA_ERROR,
    error,
  };
};

export const displayHamburgMenu = () => {
  return {
    type: gameCatalogActionTypes.DISPLAY_HAMBURGER_MENU,
  };
};

export const gameCatalogOnDisplay = (data) => {
  return {
    type: gameCatalogActionTypes.GAME_CATALOG_ON_DISPLAY,
    payload: data,
  };
};

export const setGroupSelectedValue = (data) => {
  return {
    type: gameCatalogActionTypes.GROUP_SELECTED_VALUE,
    payload: data,
  };
};

export const setLevelSelectedValue = (data) => {
  return {
    type: gameCatalogActionTypes.LEVEL_SELECTED_VALUE,
    payload: data,
  };
};

export const setSearchBarValue = (data) => {
  return {
    type: gameCatalogActionTypes.SEARCH_BAR_VALUE,
    payload: data,
  };
};

export const searchGames = () => {
  return {
    type: gameCatalogActionTypes.SEARCH_BUTTON_ONCLICK,
  };
};

export const filterGames = () => {
  return {
    type: gameCatalogActionTypes.FILTER_GAMES,
  };
};
