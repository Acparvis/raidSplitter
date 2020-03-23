import React from "react";
import {addPlayer, movePlayer} from "../../data/actions/players";
import {connect} from "react-redux";
import getRoleData from "../../utils/getRoleData";


const mapStateToProps = state => {
  let players = state.players;

  return {playerState: players}
};

const mapDispatchToProps = dispatch => ({
  playerAdd: (value) => dispatch(addPlayer(value)),
  playerMove: (event, cat) => dispatch(movePlayer(event, cat)),
});


const RaidComposition = ({playerState, category}) => {
  let roleCount = [[], [], [], []];

  playerState.map((player) => {
    if (player.category === category) roleCount[player.role].push(player)
  })

  return (
    <div className={"flex flex-row px-6 justify-between text-white"}>
      {roleCount.map((list, index) => {
        return (
          <div className={"flex flex-row"}>
            {getRoleData(index).icon}
            {list.length}
          </div>
        )
      })}
    </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(RaidComposition);