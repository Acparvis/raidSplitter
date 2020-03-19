import React from "react";
import getClassData from "../../utils/getPlayerClass";
import getRoleData from "../../utils/getRoleData";
import { FaCog } from 'react-icons/fa';

const PlayerCard = ({name, characterClass, role, note}) => {

  const generateStyles = () => {
    return {
    backgroundColor: `${getClassData(characterClass).hex}`,
      minWidth: "100px"
    }
  }

  return (
    <div style={generateStyles()}>
      <span>{name} {getRoleData(role).icon}</span> <FaCog onClick={() => alert(note)}/>
    </div>
  )
};

export default PlayerCard;