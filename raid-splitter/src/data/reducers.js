import initial from "./initial";
import {ADD_PLAYER, MOVE_PLAYER} from "./actions/players";
import generatePlayerId from "../utils/generatePlayerId";

const addPlayer = (state, {value}) => {
  value.category = "benched";
  value.id = state.players.length + 1;

  if (value.alts === null) value.alts = [];

  return {
    players: [
      ...state.players,
      value
    ]
  }

};

const movePlayer = (state, {event, cat}) => {
  const id = event.dataTransfer.getData("id");

  let players = state.players.filter(player => {
    if (player.name == id) {
      player.category = cat;
    }
    return player;
  });

  return {...state, players}
}

// Reducer switch statement.
export default (state = initial, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return addPlayer(state, action);
    case MOVE_PLAYER:
      return movePlayer(state, action);
    default:
      return state;
  }
};
