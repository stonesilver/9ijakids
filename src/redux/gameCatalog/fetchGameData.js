import { fetchDataSuccess, fetchDataError } from './action';
import axios from 'axios';

// fetching data from the API

const fetchGameData = () => {
  return (dispatch) => {
    axios
      .get(process.env.REACT_APP_API_URL)
      .then((res) => {
        console.log(res.data);
        dispatch(fetchDataSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchDataError(err));
      });
  };
};

export default fetchGameData;
