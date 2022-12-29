const { useState, useEffect } = React

import { noteService } from "../services/note.service";

export function NotePreview({ note }) {
    const { info, title } = note
    console.log('title :>> ', title);

    return <article className="note-preview">
        <div className="note-content">
            <h4>{title}</h4>
            <button className="btn btn-pin">
                <i className="fa-solid fa-thumbtack"></i>
            </button>
            <div className="note-preview-content">{info.txt}</div>
        </div>
        <div className="note-preview-edit">
            <button className="btn btn-text-color-preview">
                <i className="fa-solid fa-paintbrush"></i>
            </button>
            <button className="btn btn-bgc-preview">
                <i className="fa-solid fa-palette"></i>
            </button>
            <button className="btn btn-email-preview">
                <i className="fa-solid fa-paper-plane"></i>
            </button>
            <button className="btn btn-add-preview">
                <i className="fa-solid fa-plus"></i>
            </button>
            <button className="btn btn-close-preview">
                <i className="fa-solid fa-xmark"></i>
            </button>
        </div>
    </article>
}