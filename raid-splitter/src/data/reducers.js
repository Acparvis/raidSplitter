import initial from "./initial";
import {ADD_PLAYER, EDIT_PLAYER, MOVE_PLAYER} from "./actions/players";
import {RESET_APP} from "./actions/app";
import _ from "lodash";

const addPlayer = (state, {value}) => {
  value.category = "benched";
  value.id = state.players.length + 1;
  value['isSkinner'] = value['isSkinner'] || false;

  if (value.alts === null) value.alts = [];

  return {
    players: [
      ...state.players,
      value
    ]
  }

};

const editPlayer = (state, {value, id}) => {
  value['category'] = value['category'] || "benched";
  value['isSkinner'] = value['isSkinner'] || false;

  if (typeof value.role !== "number") value.role = value.role[0];
  if (typeof value.characterClass !== "number") value.characterClass = value.characterClass[0];

  if (value.alts === null) value.alts = [];
  let players = state.players;
  const hasId = (element) => element.id === id;
  const playerIndex = players.findIndex(hasId);
  players[playerIndex] = _.merge({}, players[playerIndex], value);

  return {
    players: [
      ...players
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
    case EDIT_PLAYER:
      return editPlayer(state, action);
    case MOVE_PLAYER:
      return movePlayer(state, action);
    case RESET_APP:
      return initial;
    default:
      return state;
  }
};
