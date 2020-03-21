import React from "react";
import {connect} from "react-redux";
import {addPlayer, movePlayer} from "../../data/actions/players";

const mapStateToProps = state => {
  let players = state.players;

  return {players: players}
};

const mapDispatchToProps = dispatch => ({
  playerAdd: (value) => dispatch(addPlayer(value)),
  playerMove: (event, cat) => dispatch(movePlayer(event, cat)),
});


class DragAndDropApp extends React.Component {

  onDragOver = ev => {
    ev.preventDefault();
  };

  onDragStart = (ev, name) => {
    ev.dataTransfer.setData("id", name);
  };

  onDrop = (ev, cat) => {
    const id = ev.dataTransfer.getData("id");

    let players = this.state.players.filter(task => {
      if (task.name == id) {
        task.category = cat;
      }
      return task;
    });
    this.setState({
      ...this.state,
      players
    });
  };

  handleKeyPress = ev => {
    if ((ev.key == "Enter") && (ev.target.value != "")) {
      this.setState({
        players: [
          ...this.state.players,
          { name: ev.target.value, category: "benched" }
        ]
      });
      ev.target.value = " ";
    }
  };

  render() {
    var players = {
      benched: [],
      raid1: [],
      raid2: [],
      raid3: [],
      trash: []
    };

    this.props.players.forEach(t => {
      players[t.category].push(
        <div
          className="item-container"
          key={t.name}
          draggable
          onDragStart={e => this.onDragStart(e, t.name)}
        >
          {t.name}
        </div>
      );
    });


    return (
      <div>
        <div class="container">
          <div
            className="drop-area"
            onDragOver={e => this.onDragOver(e)}
            onDrop={e => this.props.playerMove(e, "benched")}
          >
            <h1>Benched</h1>
            {players.benched}
          </div>
          <div
            className="drop-area"
            onDragOver={e => this.onDragOver(e)}
            onDrop={e => this.props.playerMove(e, "raid1")}
          >
            <h1>Raid 1</h1>
            {players.raid1}
          </div>
          <div
            className="drop-area"
            onDragOver={e => this.onDragOver(e)}
            onDrop={e => this.props.playerMove(e, "raid2")}
          >
            <h1>Raid 2</h1>
            {players.raid2}
          </div>
          <div
          className="drop-area"
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => this.props.playerMove(e, "raid3")}
        >
          <h1>Raid 3</h1>
          {players.raid3}
        </div>
        </div>
        <div>
          <input
            onKeyPress={e => this.handleKeyPress(e)}
            className="input"
            type="text"
            placeholder="Task Name"
          />

          <div
            class="trash-drop"
            onDrop={e => this.props.playerMove(e, "trash")}
            onDragOver={e => this.onDragOver(e)}
          >
            Drop here to remove
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DragAndDropApp);