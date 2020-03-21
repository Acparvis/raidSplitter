// Render Prop
import React from 'react';
import {connect} from "react-redux";
import {Form} from "@flipbyte/formik-json"
import {addPlayer} from "../../data/actions/players";
import schema from "./newPlayerSchema";


const mapStateToProps = state => {
  let players = state.players

  return {players}
};



const mapDispatchToProps = dispatch => ({
  playerAdd: (value) => dispatch(addPlayer(value)),
});

const NewPlayer = ({playerAdd, players}) => (
    <Form schema={schema(players)} onSubmit={(values, {resetForm}) => {
      playerAdd(values)
      resetForm();
    }}/>
);


export default connect(mapStateToProps, mapDispatchToProps)(NewPlayer);