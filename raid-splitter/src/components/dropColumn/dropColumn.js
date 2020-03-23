import React from "react";
import {addPlayer, movePlayer} from "../../data/actions/players";
import {connect} from "react-redux";
import genRaidinfo from "../../utils/genRaidinfo";
import TextDisplay from "../textDisplay";
import RaidComposition from "../raidComposition/raidComposition";

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
      <TextDisplay content={genRaidinfo(playerState, category)}/>

      <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      <RaidComposition category={category}/>
      {players[category].sort((a, b) => (a.props.role > b.props.role) ? 1 : -1)}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(DropColumn);