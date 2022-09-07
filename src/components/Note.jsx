import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { connect } from "react-redux";
import { deleteNote } from "../redux/actions";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => props.deleteNote(props.id)}>
        <DeleteIcon />
      </button>
    </div>
  );
}

const mapDispatchToProps = {
  deleteNote
};

export default connect(null, mapDispatchToProps)(Note);
