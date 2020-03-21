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

    alts.forEach((alt) => {
      let found = players.find(function(player){
        return player.name === alt && player.category === category
      });
      if (found) conflicts.push(found);
    })

    return conflicts;

    // if any of the alts are in the same column return red boxshadow

  }

  return (
    <div style={generateStyles()}
          draggable
          onDragStart={e => onDragStart(e, name)}
         className="item-container"
    >
      {console.log(conflictDetect())}
      {/*removed options cog for now*/}
      {/*<span>{name} {getRoleData(role).icon}</span> <FaCog onClick={() => alert(note)}/>*/}
      <span>{name} {getRoleData(role).icon}</span>
      <span>{JSON.stringify(conflictDetect())}</span>
    </div>
  )
};

export default PlayerCard;