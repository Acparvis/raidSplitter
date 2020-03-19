import React from 'react';
import './App.css';
import Board from '@lourenci/react-kanban';
import { connect } from "react-redux";
import PlayerCard from "./components/playerCard/playerCard";
import RaidHeader from "./components/raidHeader/raidHeader";


const mapStateToProps = state => {
  let boardData = state.boardData;

  return {boardData}
};

function App({boardData}) {
  return (
    <div className="App">
      <Board initialBoard={boardData} renderCard={PlayerCard} renderColumnHeader={RaidHeader}/>
    </div>
  );
}

export default connect(mapStateToProps)(App);
