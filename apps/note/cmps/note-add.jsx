const { useState, useEffect, useRef } = React

import { noteService } from "../services/note.service.js"

export function AddNote({ setNotes }) {

    const [addNodeParams, setAddNodeParams] = useState(noteService.getDefaultNote())
    const [isAdding, setIsAdding] = useState(false)
    const addNoteOutlineRef = useRef(null)

    useOutsideClosing(addNoteOutlineRef)

    function handleChange({ target }) {
        let { value, name: field, type } = target
        // Setting params for integration with email
        if (type === 'txt') {
            return setAddNodeParams(prev => {
                prev.info.txt = value
                return { ...prev }
            })
        }
        setAddNodeParams(prev => {
            return { ...prev, [field]: value }
        })
    }

    function useOutsideClosing(ref) {
        useEffect(() => {
            function handleOutsideClick(ev) {
                if (ref.current && !ref.current.contains(ev.target)) {
                    clearState()
                    // if (isEditing) setIsEditing(false)
                }
            }
            document.addEventListener('mousedown', handleOutsideClick)
            return () => {
                document.removeEventListener('mousedown', handleOutsideClick)
            }
        }, [ref])
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

    function clearState() {
        setIsAdding(false)
        setAddNodeParams(noteService.getDefaultNote)
    }

    function addNote(){
        clearState()

        noteService.save(addNodeParams)
            .then(newNote => {
                return setNotes(prev => [newNote, ...prev])
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
                    <button className="btn btn-pin">
                        <i className="fa-solid fa-thumbtack"></i>
                    </button>
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
                        <button className="btn btn-img">
                            <i className="fa-solid fa-image" title="Add image"></i>
                        </button>
                        <button className="btn btn-todo">
                            <i className="fa-solid fa-list" title="Add todo list"></i>
                        </button>
                    </div>
                )}
            </div>

            {isAdding && (
                <div className="note-input-edit">
                    <button className="btn btn-text-color">
                        <i className="fa-solid fa-paintbrush"></i>
                    </button>
                    <button className="btn btn-bgc">
                        <i className="fa-solid fa-palette"></i>
                    </button>
                    <button className="btn btn-email">
                        <i className="fa-solid fa-paper-plane"></i>
                    </button>
                    <button className="btn btn-add" onClick={addNote}>
                        <i className="fa-solid fa-plus"></i>
                    </button>
                    <button className="btn btn-close">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
            )}
        </section>

    )


}