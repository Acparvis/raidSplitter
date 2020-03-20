const generatePlayerId = (state) => {
  const columns = state.boardData.columns;

  let nextId = 1;

  // get the number of player sin each column to calculate the next id count
  columns.forEach(item => nextId = nextId + item.cards.length);

  return nextId;
}

export default generatePlayerId;