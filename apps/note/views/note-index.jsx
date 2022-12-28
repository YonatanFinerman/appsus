
const { useState, useEffect } = React
// const { Link } = ReactRouterDOM

import { noteList } from './../cmps/note-list.jsx';
import { noteFilter } from './../cmps/note-filter.jsx';
import { noteSideBar } from './../cmps/note-sidebar.jsx';

// import { showErrorMsg, showSuccessMsg } from './../../../services/event-bus.service';
import { noteService } from './../services/note.service.js';

export function NoteIndex() {
    const [isLoading, setIsLoading] = useState(false)
    const [filterBy, setFilterBy] = useState(noteService.getDefaultFilter())
    const [notes, setNotes] = useState([])


    useEffect(() => {
        loadNotes()
    }, [])



    function loadNotes() {
        setIsLoading(true)
        noteService.query(filterBy)
            .then((notes) => {
                setNotes(notes)
                setIsLoading(false)
            })
    }

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
    }

    function onRemoveNote(noteId) {
        carService.remove(noteId)
            .then(() => {
                const updatedNotes = notes.filter(note => note.id !== noteId)
                setNotes(updatedNotes)
                showSuccessMsg('Note removed')
            })
            .catch((err) => {
                console.log('Had issues removing', err)
                showErrorMsg('Could not remove note')
            })
    }

    return <section className="note-index full main-layout">
        <div className="full main-layout">

            <NoteFilter onSetFilter={onSetFilter} />

            {!isLoading && <NoteList notes={notes} onRemoveNote={onRemoveNote} />}
            {isLoading && <div>Loading..</div>}
            {!notes.length && <div>No notes to show..</div>}
        </div>
    </section>



}



