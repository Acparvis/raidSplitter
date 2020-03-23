import React from "react";
import {addPlayer, movePlayer} from "../../data/actions/players";
import {connect} from "react-redux";
import getRoleData from "../../utils/getRoleData";
import reservables from "../../utils/constants/reservables";


const mapStateToProps = state => {
  let players = state.players;

  return {playerState: players}
};

const mapDispatchToProps = dispatch => ({
  playerAdd: (value) => dispatch(addPlayer(value)),
  playerMove: (event, cat) => dispatch(movePlayer(event, cat)),
});

const roleCount = (playerState, category) => {
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
            <span className={"pl-2"}>{list.length}</span>
          </div>
        )
      })}
    </div>
  )
}

const itemCount = (playerState, category) => {
  let itemCount = reservables.map((item) => {
    return {name: item.name, players: []};
  });


  playerState.map((player) => {
    if (player.category === category) {

      if (player?.itemReservation?.length) {
        player.itemReservation.forEach((item) => {
          //find the index where that item is being stored inside itemCount
          const foundIndex = itemCount.findIndex(element => element.name === item);

          //push the players name to that items players array
          itemCount[foundIndex].players.push(player.name);
        })
      }
    }
  })

  return (
    <div className={"flex flex-column px-6 justify-between text-white"}>
      {itemCount.map((item, index) => {
        return (
          <div>
            <h3 className={"font-semibold"}>{item.name}</h3>
            <div className={"flex flex-column"}>
              {/*{getRoleData(index).icon}*/}
              {item.players.map((player) => <span className={"pl-2"}>{player}</span>)}
            </div>
          </div>
        )
      })}
    </div>
  )

  return itemCount;
}

const RaidComposition = ({playerState, category}) => {

  return (
    <>
      {roleCount(playerState, category)}
      {itemCount(playerState, category)}
    </>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(RaidComposition);