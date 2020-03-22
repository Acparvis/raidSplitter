export const ADD_PLAYER = Symbol("ADD_PLAYER");

export const addPlayer = (value) => ({
  type: ADD_PLAYER,
  value
});

export const MOVE_PLAYER = Symbol("MOVE_PLAYER");

export const movePlayer = (event, cat) => ({
  type: MOVE_PLAYER,
  event,
  cat
});

