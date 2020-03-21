import React from "react";

const DropColumn = ({category, players, playerMove, onDragOver}) => {
  return (
    <div
      className="drop-area"
      onDragOver={e => onDragOver(e)}
      onDrop={e => playerMove(e, category)}
    >
      <h1>{[category]}</h1>
      {players[category]}
    </div>
  )
}

export default DropColumn;