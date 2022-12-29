const { useState, useEffect } = React

import { noteService } from "../services/note.service";

export function NotePreview({ note }) {
    const {type, isPinned, info, title} = note
    console.log('title :>> ', title);

    return <article className="note-preview">
        <div className="note-content">
        <h4>{title}</h4>
        <button className="note-content-pin-btn">pin</button>
           <div className="note-preview-content">{info.txt}</div> 
        </div>
        <div className="note-preview-edit">edit options</div>
    </article>
}