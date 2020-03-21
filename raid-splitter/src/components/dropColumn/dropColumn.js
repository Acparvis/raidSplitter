import React from "react";
import {FaCog} from "react-icons/all";
import {addPlayer, movePlayer} from "../../data/actions/players";
import {connect} from "react-redux";
import genRaidinfo from "../../utils/genRaidinfo";

const mapStateToProps = state => {
  let players = state.players;

  return {playerState: players}
};

const mapDispatchToProps = dispatch => ({
  playerAdd: (value) => dispatch(addPlayer(value)),
  playerMove: (event, cat) => dispatch(movePlayer(event, cat)),
});



const DropColumn = ({category, players, playerMove, onDragOver, playerState}) => {
  return (
    <div
      className="drop-area"
      onDragOver={e => onDragOver(e)}
      onDrop={e => playerMove(e, category)}
    >
      <button onClick={() => alert(genRaidinfo(playerState, category))}>Generate Raid Info</button>
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      {players[category]}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(DropColumn);