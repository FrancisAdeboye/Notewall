import React from "react";
import { useState } from "react";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [isExpanded, setIsExpanded] = useState(false)

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(e) {
        const { name, value } = e.target
        setNote((prevInput) => {
            return {...prevInput, [name] : value}})
    }
    
    function submitInput(e) {
        props.onAdd(note)
        setNote({
            title: "",
            content: ""
        })
        e.preventDefault();
    }

    function expand() {
        setIsExpanded(true)
    }

    return (
        <div className="form-note">
            <form>
                {isExpanded && <input value={note.title} onChange={handleChange} name="title" placeholder="Title" type="text" required/>}
                <textarea onClick={expand} value={note.content} onChange={handleChange} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} type="text" required/>
                <Zoom in={isExpanded ? true : null}>
                    <button onClick={submitInput}>
                        <span>
                            <NoteAddIcon />
                        </span>
                    </button>
                </Zoom>
            </form>
        </div>
    )
}

export default CreateArea;