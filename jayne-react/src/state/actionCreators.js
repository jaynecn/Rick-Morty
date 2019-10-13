import axios from 'axios';
import * as types from './actionTypes';

const characters = 'https://rickandmortyapi.com/api/character';

// 7: Design action creators that will activate the reducers.

export function increment() {
  return { type: types.INCREMENT };
}

export function decrement() {
  return { type: types.DECREMENT };
}

export const getCharacters = () => dispatch => {
  axios.get(characters)
    .then(res => {
      console.log(res.data);
      dispatch({ type: types.SHOW_CHARACTERS, payload: res.data.results });
    })
    .catch(err => {
      console.log('error', err.response);
    });
};
