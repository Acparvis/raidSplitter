import React from "react";
import getClassData from "../../utils/getPlayerClass";
import getRoleData from "../../utils/getRoleData";
import { FaCog } from 'react-icons/fa';

const PlayerCard = ({name, characterClass, role, note, onDragStart}) => {

  const generateStyles = () => {
    return {
    backgroundColor: `${getClassData(characterClass).hex}`,
      minWidth: "100px"
    }
  }

  return (
    <div style={generateStyles()}
          draggable
          onDragStart={e => onDragStart(e, name)}
         className="item-container"
    >
      <span>{name} {getRoleData(role).icon}</span> <FaCog onClick={() => alert(note)}/>
    </div>
  )
};

export default PlayerCard;