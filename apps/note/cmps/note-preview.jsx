const { useState, useEffect } = React

import { noteService } from "../services/note.service";

export function NotePreview({ note }) {
    const { info, title, type } = note
    console.log('title :>> ', title);

    function getNoteInfo() {
        if (type === 'txt') {
            return info.txt
        } else if (type === 'img') {
            return <img className="img" src={info.url} alt="auto" />
            
        }
    }

    return <article className="note-preview">
        <div className="note-content">
            <h4>{title}</h4>
            <button className="btn btn-pin">
                <i className="fa-solid fa-thumbtack"></i>
            </button>
            <div className="note-preview-content">
                {getNoteInfo()}
                {/* <img src="/assets/img/audi.jpg" alt="" /> */}
            </div>
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