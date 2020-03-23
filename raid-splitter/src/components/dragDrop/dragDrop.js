import React from "react";
import {connect} from "react-redux";
import {addPlayer, movePlayer} from "../../data/actions/players";
import { resetApp } from "../../data/actions/app";
import PlayerCard from "../playerCard/playerCard";
import NewPlayer from "../newPlayer/newPlayer";
import DropColumn from "../dropColumn/dropColumn";
import {FaTrashAlt} from "react-icons/all";
import ReactJson from 'react-json-view';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { FaCog } from "react-icons/all";

const mapStateToProps = state => {
  let players = state.players;

  return {players: players}
};

const mapDispatchToProps = dispatch => ({
  playerAdd: (value) => dispatch(addPlayer(value)),
  playerMove: (event, cat) => dispatch(movePlayer(event, cat)),
  appReset: () => dispatch(resetApp()),
});

class DragAndDropApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: false,
      trashColumn: false,
      dTools: false,
      editMode: false,
    }
  }

  formFlip = () => this.setState({form: !this.state.form});

  editFlip = () => this.setState({ editMode: !this.state.editMode});

  toggleTrashColumn = () => this.setState({ trashColumn: !this.state.trashColumn})

  onDragOver = ev => {
    ev.preventDefault();
  };

  onDragStart = (ev, name) => {
    ev.dataTransfer.setData("id", name);
  };

  submit = (resetData) => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure you want to nuke all data?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => resetData(),
        },
        {
          label: 'No',
          onClick: () => console.log("don't reset"),
        }
      ]
    });
  };

  render() {
    var players = {
      benched: [],
      raid1: [],
      raid2: [],
      raid3: [],
      trash: []
    };

    this.props.players.forEach(player => players[player.category].push(<PlayerCard editMode={this.state.editMode} {...player} player={player} onDragStart={this.onDragStart} players={this.props.players}/>));

    return (
      <div>
        <div id="background-image"></div>
        <h1>Raid Splitter v0.1</h1>

        <button className={"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"} onClick={() => this.editFlip()}><FaCog/></button>
        <h2 className={"text-white"}>{`Edit mode: ${JSON.stringify(this.state.editMode)}`}</h2>
        <div className="flex flex-row">
          {Object.keys(players).filter(i => this.state.trashColumn || i !== "trash").map((item) => {
              return <DropColumn
                onDragOver={this.onDragOver}
                category={item} players={players}
                playerMove={this.props.playerMove}
              />
            }
          )}
        </div>
        <div className="trash-drop-container">
          <div className="add-player" onClick={this.formFlip}>
            Add player
          </div>
          <div
            className="trash-drop"
            onDrop={e => this.props.playerMove(e, "trash")}
            onDragOver={e => this.onDragOver(e)}
            onClick={this.toggleTrashColumn}
          >
            <FaTrashAlt/>
          </div>
        </div>


        {this.state.form && (<div className="formContainer">
          <NewPlayer/>
        </div>)}

        <button className={"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"} onClick={() => this.setState({dTools: !this.state.dTools})}>Dev tools</button>

        <button className={"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"} onClick={() => this.submit(this.props.appReset)}>nuke data</button>


        {!!this.state.dTools && <ReactJson src={this.props.players} theme={"shapeshifter:inverted"}/>}

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DragAndDropApp);