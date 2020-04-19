import React from "react";
import getClassData from "../../utils/getPlayerClass";
import getRoleData from "../../utils/getRoleData";
import {GiCurvyKnife} from 'react-icons/gi';
import EditPlayer from "../editPlayer/editPlayer";

const PlayerCard = ({name, category, characterClass, role, note, alts, onDragStart, players, isSkinner, editMode, player, altMode}) => {

  const generateStyles = () => {
    return {
      backgroundColor: `${getClassData(characterClass).hex}`,
      minWidth: "100px",
      boxShadow: altIndicator(),
    }
  }

  const conflictDetect = () => {
    // look at any alts the player has
    let conflicts = []

    // if any of the alts are in the same column return them
    !!alts && alts.forEach((alt) => {
      let found = players.find(function (player) {
        return player.name === alt && player.category === category
      });
      if (found) conflicts.push(found.name);
    })

    // get all the players from the same column
    const columnPlayers = players.filter(player => player.category === category);

    //compare the player name to the alts in the column, if they match return the alt name
    columnPlayers.forEach(p => {
      let found = !!p.alts && p.alts.find(function (alt) {
        return name === alt
      });

      if (found) conflicts.push(p.name)
    })

    return conflicts;
  }

  const skinnerCheck = (isSkinner) => {
    if (!!isSkinner && isSkinner[0] === true) {
      return <GiCurvyKnife/>
    }

    return null;
  }

  const altIndicator = () => {
    if (!altMode) return "";
    if (!!alts === false) return "";
    if (category !== "benched") return "";
    // check if a linked character is active

    // if so, return alt indicator CSS
      return "0px 0px 26px 0px rgba(255,0,0,1)"

  }

  return (
    <div style={generateStyles()}
         draggable
         onDragStart={e => onDragStart(e, name)}
         className="item-container content-center"
    >
      <div className={"flex justify-between w-auto content-center flex-row"}>
        <p className={"mx-2"}>{name}</p>
        <div>{getRoleData(role).icon}</div>
        <div>{skinnerCheck(isSkinner)}</div>
      </div>
      <div className="flex">
        {!!conflictDetect().length &&
        <div className="flex justify-between w-auto content-center flex-row">
          {conflictDetect().map((conflict) => <div className={"text-red-600 font-bold mr-1"}>{conflict}</div>)}
        </div>}
        {!!editMode && <EditPlayer players={players} player={player}/>}
      </div>
    </div>
  )
};

export default PlayerCard;