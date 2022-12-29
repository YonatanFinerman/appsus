const { useState, useEffect, UseRef } = React

import { noteService } from "../services/note.service.js"

export function AddNote({ setNotes }) {

    const [addNodeParams, setAddNodeParams] = useState(noteService.getDefaultNote())
    const [isAdding, setIsAdding] = useState(false)
    // const inputRef = UseRef(null)

    function handleChange({ target }) {
        let { value, name: field, type } = target
        // TODO: do i need this check for value?
        value = (type === 'number') ? +value : value
        // Setting params for integration with email
        if (target.id === 'txt') {
            return setAddNodeParams(prev => {
                prev.info.txt = value
                return { ...prev }
            })
        }
        setAddNodeParams(prev => {
            return { ...prev, [field]: value }
        })
    }

    function addNote() {
        //this function is sent to the add button onClick event
        setIsAdding(false)
        setAddNodeParams(noteService.getDefaultNote())

        noteService.save(addNodeParams)
            .then(newNote => {
                setNotes(prev => [newNote, ...prev])
            })
    }

    return (
        <section className="note-input-text-area">
            {isAdding && (
                <div className="note-input-text">
                    <input
                        type="title"
                        placeholder="Title"
                        name="title"
                        value={addNodeParams.txt}
                        onChange={handleChange}
                    />
                    <button>Pin</button>
                </div>
            )}
            <div className="note-input-text">
                <input
                    type="text"
                    placeholder="Take a note..."
                    id="txt"
                    name="txt"
                    value={addNodeParams.txt}
                    onChange={handleChange}
                    onClick={() => setIsAdding(true)}
                />
                {!isAdding && (
                    <div className="inline-buttons">
                        <button className="btn btn-img">Add image</button>
                        <button className="btn ">Add something</button>
                    </div>
                )}
            </div>

            {isAdding && (
                <div className="note-input-edit">
                    <button>
                        Text color
                    </button>
                    <button>
                        Background color
                    </button>
                    <button>
                        Send as an email
                    </button>
                    <button className="note-input-edit-add-button" onClick={addNote}>
                        add
                    </button>
                    <button>
                        X
                    </button>
                </div>
            )}
        </section>

    )


}