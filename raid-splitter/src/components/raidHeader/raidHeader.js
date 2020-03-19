import React from "react";
import getRaidComposition from "../../utils/getRaidComposition";

const RaidHeader = (props) => {

  return (
    <div>
      <h3>{props.title}</h3>
      <p>Players: {props.cards.length}</p>
      {getRaidComposition(props.cards)}
    </div>
  )
};

export default RaidHeader;