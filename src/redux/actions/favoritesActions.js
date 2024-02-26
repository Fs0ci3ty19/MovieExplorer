import {ADD_FAVORITE, REMOVE_FAVORITE} from '../constants';

export const addFavorite = movie => {
  return {
    type: ADD_FAVORITE,
    payload: movie,
  };
};

export const removeFavorite = movieId => {
  return {
    type: REMOVE_FAVORITE,
    payload: movieId,
  };
};
