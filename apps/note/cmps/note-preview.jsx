const { useState, useEffect } = React

import { noteService } from "../services/note.service";

export function NotePreview({ note }) {
    const {type, isPinned, info} = note


    return <article className="note-preview">
        <h2>Your text: {note.info.txt}</h2>
    </article>
}