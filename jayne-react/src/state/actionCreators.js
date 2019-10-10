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