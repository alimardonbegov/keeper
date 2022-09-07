import React from "react";
import Header from "./components/Header";
import { connect } from "react-redux";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App({ notes }) {
  return (
    <div>
      <Header />
      <CreateArea />
      <div>
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  notes: state.notes.listOfNotes
});

export default connect(mapStateToProps, null)(App);
