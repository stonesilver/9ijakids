import { gameCatalogActionTypes } from './actionTypes';

const INITIAL_STATE = {
  pending: true,
  error: null,
  gameData: [],
  gameCatalogOnDisplay: [],
  groupSelectedValue: '',
  levelSelectedValue: '',
  searchBarValue: '',
  displayHamburgMenu: false,
};

const gameCatalogReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case gameCatalogActionTypes.FETCH_DATA_PENDING:
      return {
        ...state,
        pending: true,
      };
    case gameCatalogActionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        pending: false,
        gameData: action.payload,
        gameCatalogOnDisplay: action.payload,
      };
    case gameCatalogActionTypes.FETCH_DATA_ERROR:
      return {
        ...state,
        pending: true,
        error: action.error,
      };
    case gameCatalogActionTypes.DISPLAY_HAMBURGER_MENU:
      return {
        ...state,
        displayHamburgMenu: !state.displayHamburgMenu,
      };
    case gameCatalogActionTypes.GROUP_SELECTED_VALUE:
      return {
        ...state,
        groupSelectedValue: action.payload,
      };
    case gameCatalogActionTypes.LEVEL_SELECTED_VALUE:
      return {
        ...state,
        levelSelectedValue: action.payload,
      };
    case gameCatalogActionTypes.SEARCH_BAR_VALUE:
      return {
        ...state,
        searchBarValue: action.payload,
      };
    case gameCatalogActionTypes.SEARCH_BUTTON_ONCLICK:
      return {
        ...state,
        gameCatalogOnDisplay: state.gameData.filter(({ Topic }) =>
          Topic.toLowerCase().includes(state.searchBarValue.toLowerCase())
        ),
      };
    case gameCatalogActionTypes.FILTER_GAMES:
      return {
        ...state,
        gameCatalogOnDisplay:
          state.groupSelectedValue && state.levelSelectedValue === ''
            ? state.gameData.filter(
                ({ Group }) => Group === state.groupSelectedValue
              )
            : state.groupSelectedValue === '' && state.levelSelectedValue
            ? state.gameData.filter(
                ({ Level }) => Level === state.levelSelectedValue
              )
            : state.gameData.filter(
                ({ Group, Level }) =>
                  Group === state.groupSelectedValue &&
                  Level === state.levelSelectedValue
              ),
      };
    default:
      return state;
  }
};

export default gameCatalogReducer;
