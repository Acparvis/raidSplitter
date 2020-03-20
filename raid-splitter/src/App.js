import React from 'react';
import './App.css';
import Board from '@lourenci/react-kanban';
import { connect } from "react-redux";
import PlayerCard from "./components/playerCard/playerCard";
import RaidHeader from "./components/raidHeader/raidHeader";
import NewPlayer from "./components/newPlayer/newPlayer";
import {addPlayer} from "./data/actions/players";

const mapStateToProps = state => {
  let boardData = state.boardData;
  let columns = state.boardData.columns;
  let playerCount = state.playerCount;

  return {boardData: boardData, playerCount: playerCount, columns}
};

const mapDispatchToProps = dispatch => ({
  playerAdd: (value) => dispatch(addPlayer(value)),
});

function App({boardData, playerCount}) {

  console.log(boardData);
  return (
    <div className="App">
      <Board initialBoard={boardData} renderCard={PlayerCard} renderColumnHeader={RaidHeader}/>
      {JSON.stringify(boardData)}
      <NewPlayer />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
