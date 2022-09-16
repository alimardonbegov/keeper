import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "./redux/keeperSlice";

export default function App() {
    const dispatch = useDispatch();
    const notes = useSelector((state) => state.keeper.listOfNotes);

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
                            onClick={() => dispatch(deleteNote(index))}
                        />
                    );
                })}
            </div>
            <Footer />
        </div>
    );
}
