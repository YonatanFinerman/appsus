const { useState, useEffect } = React

import { noteService } from "../services/note.service";

export function NotePreview({ note }) {
    const {type, isPinned, info} = note


    return <article className="note-preview">
        <h3>{note.type}</h3>
        <div className="note-content">
            {note.info.txt}
        </div>
        <div className="note-preview-edit">edit options</div>
    </article>
}