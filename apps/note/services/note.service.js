
// I will handle the data
import { utilService } from './../../../services/util.service.js'
import { storageService } from './../../../services/async-storage.service.js'

const NOTE_KEY = 'noteDB'
_createNotes()

export const noteService = {
    query,
    get,
    remove,
    save, 
    getDefaultFilter,
}

function get(noteId) {
    return storageService.get(NOTE_KEY, noteId)
    
}

function remove(noteId) {
    return storageService.remove(NOTE_KEY, noteId)
}

function save(note) {
    if (note.id) {
        return storageService.put(NOTE_KEY, note)
    } else {
        return storageService.post(NOTE_KEY, note)
    }
}

function query(filterBy = getDefaultFilter()) {
    return storageService.query(NOTE_KEY)
    .then(notes => {
        if (filterBy.txt) {
            const regex = new RegExp(filterBy.txt, 'i')
            notes = notes.filter(note => regex.test(note.type))
        }
        // add another filter if necessary.
        return notes
    })
}

function getDefaultFilter() {
    return {  type: 'note-txt' }
}

        // CARS functions

// function getNextNoteId(noteId) {
//     return storageService.query(NOTE_KEY)
//         .then(notes => {
//             var idx = notes.findIndex(note => note.id === noteId)
//             if (idx === notes.length - 1) idx = -1
//             return notes[idx + 1].id
//         })
// }

// function getEmptyNote( type = '') {
//     return {  type }
// }


function _createNotes() {
    let notes = utilService.loadFromStorage(NOTE_KEY)
    if (!notes || !notes.length) {
        notes = []
        notes.push(_createTxtNote("Call Esteban Chiemenez"))
        notes.push(_createTxtNote("Love your self a little"))
        notes.push(_createTxtNote("Emerge victorious"))
        utilService.saveToStorage(NOTE_KEY, notes)
    }
    console.log('notes :>> ', notes);
}

function _createTxtNote(txt){
    const note = {
        type: "note-txt",
        isPinned: false,
        id: utilService.makeId(),
        info: {
            txt: txt
        }
    } 
    return note
}

function _createImgNote() {
    const note = {
        type: "note-img",
        isPinned: false,
        id: utilService.makeId(),
        info: {
            url: "http://some-img/me",
            title: "Bobi and Me"
        },
        style: {
            backgroundColor: "#00d"
        },
    }
    return note
}

function _createTodoNote(){
    const note = {
        type: "note-todos",
        isPinned: false,
        id: utilService.makeId(),
        info: {
            label: "Get my stuff together",
            todos: [
                { txt: "Driving liscence", doneAt: null },
                { txt: "Coding power", doneAt: 187111111 }
            ],
        },
    }
    return note
}


        // Try to combin all to one elegant function

// function _createNote(type, txt, imgUrl, ) {
//     const note = getEmptyNote()
//     const note = {
//         type: type,
//         isPinned: false,
//         id: utilService.makeId(),
//     }

//     switch (type) {
//         case 'txt':
//             note.info = {
//                 txt: "Call esteban cheminez"
//             }
//             break;
//         case 'img':
//             note.info = {
//                 url: "http://some-img/me",
//                 title: "Bobi and Me"
//             },
//             note.style = {
//                             backgroundColor: "#00d"
//                         }
//             break;
//         case 'todos':
//             note.info = {
//                 label: "Get my stuff together",
//                 todos: [
//                     { txt: "Driving liscence", doneAt: null },
//                     { txt: "Coding power", doneAt: 187111111 }
//                 ],
//             }
//             break;
        
//     }
//     return note
// }


        // Raw data

// const notes = [
//     {
//         id: "n101",
//         type: "note-txt",
//         isPinned: true,
//         info: {
//             txt: "Fullstack Me Baby!"
//         }
//     },
//     {
//         id: "n102",
//         type: "note-img",
//         info: {
//             url: "http://some-img/me",
//             title: "Bobi and Me"
//         },
//         style: {
//             backgroundColor: "#00d"
//         }
//     },
//     {
//         id: "n103",
//         type: "note-todos",
//         info: {
//             label: "Get my stuff together",
//             todos: [
//                 { txt: "Driving liscence", doneAt: null },
//                 { txt: "Coding power", doneAt: 187111111 }
//             ]
//         }
//     }
// ];