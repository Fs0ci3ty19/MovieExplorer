import axios from 'axios';
import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from '../constants';
import {API_KEY} from '@env';

export const fetchMovies = () => {
  return async dispatch => {
    dispatch({type: FETCH_MOVIES_REQUEST});
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/movie/popular',
        {
          params: {
            api_key: API_KEY,
          },
        },
      );
      dispatch({type: FETCH_MOVIES_SUCCESS, payload: response.data.results});
    } catch (error) {
      dispatch({type: FETCH_MOVIES_FAILURE, payload: error.message});
    }
  };
};
