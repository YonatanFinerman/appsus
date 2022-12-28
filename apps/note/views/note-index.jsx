
const { useState, useEffect } = React
// const { Link } = ReactRouterDOM

import { noteService } from './../services/note.service.js';
import { showErrorMsg, showSuccessMsg } from './../../../services/event-bus.service';

// import { noteFilter } from './../cmps/note-filter.jsx';
import { noteList } from './../cmps/note-list.jsx';

export function NoteIndex() {
    const [isLoading, setIsLoading] = useState(false)
    const [filterBy, setFilterBy] = useState(noteService.getDefaultFilter())
    const [notes, setNotes] = useState([])
    
   

    return <section className="note-index full main-layout">
        <div className="full main-layout">
            {/* <NoteFilter onSetFilter={onSetFilter} /> */}

            {!isLoading && <NoteList notes={notes} onRemoveNote={onRemoveNote} />}
            {isLoading && <div>Loading..</div>}
            {!notes.length && <div>No notes to show..</div>}
        </div>
    </section>

    // useEffect(() => {
    //     loadNotes()
    // }, [filterBy])

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


}



