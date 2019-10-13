import * as types from './actionTypes';

const initialCount = 0;
export function countReducer(count = initialCount, action) {
  switch (action.type) {
    case types.INCREMENT:
      return count + 1;
    case types.DECREMENT:
      return count - 1;
    default:
      return count;
  }
}

const initialCharacterState = [];
export function characterReducer(state = initialCharacterState, action) {
  switch (action.type) {
    case types.SHOW_CHARACTERS:
      return action.payload;
      // const newState = state.concat(action.payload);
      // newState.shift();
      // return newState;
    default:
      return state;
  }
}