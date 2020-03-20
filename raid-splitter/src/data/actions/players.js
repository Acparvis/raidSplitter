export const ADD_PLAYER = Symbol("ADD_PLAYER");

export const addPlayer = (value) => ({
  type: ADD_PLAYER,
  value
});