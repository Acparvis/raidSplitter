import initial from "./initial";
import { ADD_PLAYER } from "./actions/players";
import generatePlayerId from "../utils/generatePlayerId";

//Updates which of the first round pairings has won the game - changes state of result.
const addPlayer = (state, { value }) => {
  let newPlayer = { id: generatePlayerId(state), ...value }
  // let stateCopy = state;
  // stateCopy.boardData.columns[0].cards = stateCopy.boardData.columns[0].cards.concat(newPlayer)
  //
  // stateCopy.playerCount = generatePlayerId(state);
  // return stateCopy

  return {
    ...state,
    boardData: {
      ...state.boardData,
      columns: [
        ...state.boardData.columns,
        {
          id: 5,
          title: 'Bencd',
          cards: [
            {
              id: 7,
              name: 'Parvy',
              characterClass: 2,
              role: 2,
              note: "",
              itemPrio: [],
              alts: [4]
            },
            {
              id: 8,
              name: 'Rhinan',
              characterClass: 8,
              role: 0,
              note: "Big daddy",
              itemPrio: [],
              alts: []
            },
            {
              id: 9,
              name: 'Klingspor',
              characterClass: 4,
              role: 3,
              note: "Heal daddy",
              itemPrio: [],
              alts: []
            },
            {
              id: 10,
              name: 'Tankus',
              characterClass: 8,
              role: 1,
              note: "Bad warrior",
              itemPrio: [],
              alts: [1]
            },
          ]
        },
      ]
    }
  }


};

// Reducer switch statement.
export default(state = initial, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return addPlayer(state, action);
    default:
      return state;
  }
};
