import React from "react";
import getClassData from "../../utils/getPlayerClass";
import getRoleData from "../../utils/getRoleData";
import { FaCog } from 'react-icons/fa';

const PlayerCard = ({name, category, characterClass, role, note, alts, onDragStart, players}) => {

  const generateStyles = () => {
    return {
    backgroundColor: `${getClassData(characterClass).hex}`,
      minWidth: "100px"
    }
  }

  const conflictDetect = () => {
    // look at any alts the player has
    let conflicts = []

    // if any of the alts are in the same column return them
    !!alts && alts.forEach((alt) => {
      let found = players.find(function(player){
        return player.name === alt && player.category === category
      });
      if (found) conflicts.push(found.name);
    })

    // get all the players from the same column
    const columnPlayers = players.filter(player => player.category === category);

    //compare the player name to the alts in the column, if they match return the alt name
    columnPlayers.forEach(p => {
      let found = !!p.alts && p.alts.find(function(alt){
        return name === alt
      });

      if (found) conflicts.push(p.name)
    })



    return conflicts.join(", ");
  }

  return (
    <div style={generateStyles()}
          draggable
          onDragStart={e => onDragStart(e, name)}
         className="item-container"
    >
      {/*removed options cog for now*/}
      {/*<span>{name} {getRoleData(role).icon}</span> <FaCog onClick={() => alert(note)}/>*/}
      <span>{name} {getRoleData(role).icon}</span>
      {!!conflictDetect().length && <span className="conflict-players">{conflictDetect()}</span>}
    </div>
  )
};

export default PlayerCard;