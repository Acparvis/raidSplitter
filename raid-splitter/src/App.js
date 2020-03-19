import React from 'react';
import './App.css';
import Board from '@lourenci/react-kanban';
import { connect } from "react-redux";
import PlayerCard from "./components/playerCard/playerCard";
import RaidHeader from "./components/raidHeader/raidHeader";
import NewPlayer from "./components/newPlayer/newPlayer";

const mapStateToProps = state => {
  let boardData = state.boardData;

  return {boardData}
};

function App({boardData}) {
  return (
    <div className="App">
      <Board initialBoard={boardData} renderCard={PlayerCard} renderColumnHeader={RaidHeader}/>
      <NewPlayer/>
    </div>
  );
}

export default connect(mapStateToProps)(App);
