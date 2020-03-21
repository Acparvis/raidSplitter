import React from "react";
import {connect} from "react-redux";
import {addPlayer, movePlayer} from "../../data/actions/players";
import PlayerCard from "../playerCard/playerCard";
import NewPlayer from "../newPlayer/newPlayer";
import DropColumn from "../dropColumn/dropColumn";
import {FaTrashAlt} from "react-icons/all";

const mapStateToProps = state => {
  let players = state.players;

  return {players: players}
};

const mapDispatchToProps = dispatch => ({
  playerAdd: (value) => dispatch(addPlayer(value)),
  playerMove: (event, cat) => dispatch(movePlayer(event, cat)),
});

class DragAndDropApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: false
    }
  }

  formFlip = () => this.setState({form: !this.state.form});

  onDragOver = ev => {
    ev.preventDefault();
  };

  onDragStart = (ev, name) => {
    ev.dataTransfer.setData("id", name);
  };

  render() {
    var players = {
      benched: [],
      raid1: [],
      raid2: [],
      raid3: [],
      trash: []
    };

    this.props.players.forEach(player => players[player.category].push(<PlayerCard {...player} onDragStart={this.onDragStart} players={this.props.players}/>));


    return (
      <div>
        <div id="background-image"></div>
        <div className="container">
          {Object.keys(players).filter(i => i !== "trash").map((item) => {
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
          >
            <FaTrashAlt/>
          </div>
        </div>


        {this.state.form && (<div className="formContainer">
          <NewPlayer/>
        </div>)}

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DragAndDropApp);