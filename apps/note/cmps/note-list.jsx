// const { Link } = ReactRouterDOM

import { NotePreview } from "./note-preview.jsx";

export function NoteList({ notes, onRemoveNote }) {

    console.log('notes from note list', notes)

    return <section className="note-list">
        {notes.map(note => {
            return <NotePreview mey={note.id} note={note} />
        })}
    </section>

}
