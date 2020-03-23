import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {Form} from "@flipbyte/formik-json"
import {FaCog} from "react-icons/all";
import schema from "../newPlayer/newPlayerSchema";
import {editPlayer} from "../../data/actions/players";
import {connect} from "react-redux";

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const mapStateToProps = state => {
  let players = state.players;

  return {players: players}
};

const mapDispatchToProps = dispatch => ({
  playerEdit: (value, id) => dispatch(editPlayer(value, id)),
});

const EditPlayer = ({players, player, playerEdit}) =>{
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal(){
    setIsOpen(false);
  }

  return (
    <>
      <FaCog onClick={() => setIsOpen(!modalIsOpen)}/>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Edit Player"
      >
        <p>Edit player</p>
        <Form
          initialValues={{name: player.name,
            characterClass: [player.characterClass],
            role: [player.role],
            alts: player.alts,
            isSkinner: player.isSkinner,
            note: player.note,
            itemReservation: player.itemReservation
          }}
          schema={schema(players)} onSubmit={(values, {resetForm}) => {
          playerEdit(values, player.id);
          closeModal();
        }}/>
        <button onClick={closeModal}>close</button>
      </Modal>
      </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPlayer);