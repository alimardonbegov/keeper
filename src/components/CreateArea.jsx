import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import { useDispatch } from "react-redux";
import { createNote } from "../redux/keeperSlice";

export default function CreateArea() {
    const dispatch = useDispatch();
    const [note, setNote] = useState({
        title: "",
        content: "",
    });
    const [isOnTitle, setIsOnTitle] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value,
            };
        });
    }

    function submitNote(event) {
        dispatch(createNote(note));
        setNote({
            title: "",
            content: "",
        });
        event.preventDefault();
    }

    return (
        <div>
            <form className="create-note">
                {isOnTitle ? (
                    <Zoom in={true}>
                        <input
                            name="title"
                            onChange={handleChange}
                            value={note.title}
                            placeholder="Title"
                            required
                        />
                    </Zoom>
                ) : null}

                <textarea
                    name="content"
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows={isOnTitle ? "3" : "1"}
                    onClick={() => setIsOnTitle(true)}
                />

                <Zoom in={isOnTitle}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}
