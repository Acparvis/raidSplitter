import React from 'react';
import './App.css';
import Board from '@lourenci/react-kanban';
import { connect } from "react-redux";

const board = {
  columns: [
    {
      id: 1,
      title: 'Backlog',
      cards: [
        {
          id: 1,
          title: 'Add card',
          description: 'Add capability to add a card in a column'
        },
      ]
    },
    {
      id: 2,
      title: 'Doing',
      cards: [
        {
          id: 2,
          title: 'Drag-n-drop support',
          description: 'Move a card between the columns'
        },
        {
          id: 3,
          title: 'Drag-n-drop support',
          description: 'Move a card between the columns'
        },
      ]
    }
  ]
}

const mapStateToProps = state => {
  return {
    value: "hello",
  }
};

function App() {
  return (
    <div className="App">
      <Board initialBoard={board} />
    </div>
  );
}

export default App;
