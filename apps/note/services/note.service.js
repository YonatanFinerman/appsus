
// I will handle the data
import { utilService } from './../../../services/util.service.js'
import { storageService } from './../../../services/async-storage.service.js'

export const noteService = {
    query,
    get,
    remove,
    save, 
    getDefaultFilter,
    getDefaultNote,
}

const NOTE_KEY = 'notesDB'
_createNotes()


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

function getDefaultFilter(){
    return 'note-txt'
}

function getDefaultNote() {
    return {  
        title: '',
        type: 'note-txt',
        isPinned: false,
        info: {
            txt: ''
        }
     }
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
        notes.push(_createTxtNote("Call Esteban Chiemenez", "important"))
        notes.push(_createTxtNote("Love yourself a little", "Be kind"))
        notes.push(_createImgNote("/assets/img/suzuki.jpg", "Pimp that ride!!"))
        notes.push(_createTxtNote("The emu (Dromaius novaehollandiae) is the second-tallest living bird after its ratite relative the ostrich. It is endemic to Australia, where it is the largest native bird and the only extant member of the genus Dromaius. The emu's range covers most of mainland Australia, but the Tasmanian, Kangaroo Island and King Island subspecies became extinct after the European settlement of Australia in 1788. Emus are soft-feathered, brown, flightless birds with long necks and legs, and can reach up to 1.9 metres (6.2 ft) in height. "))
        notes.push(_createImgNote("/assets/img/fiat.jpg", "What a car!"))
        notes.push(_createTxtNote("Emerge victorious"))
        notes.push(_createTxtNote("The Battle of Van Buren was fought at Van Buren, Arkansas, on December 28, 1862, during the American Civil War. After winning the Battle of Prairie Grove on December 7, Union brigadier generals James G. Blunt (pictured) and Francis J. Herron prepared for a raid against the Confederate positions at Van Buren and Fort Smith. The Union troops struck an outlying Confederate cavalry unit north of Van Buren the morning of December 28."))
        notes.push(_createTxtNote("words, some words,and more and more words, just like that a long list of words with words and words"))
        notes.push(_createImgNote("/assets/img/audi.jpg", "My car"))
        utilService.saveToStorage(NOTE_KEY, notes)
    }
    console.log('notes :>> ', notes);
}

function _createTxtNote(txt, title = "Title"){
    const note = {
        type: "txt",
        title: title,
        isPinned: false,
        id: utilService.makeId(),
        info: {
            txt: txt
        }
    } 
    return note
}

function _createImgNote(url, title = "Title") {
    const note = {
        type: "img",
        title: title,
        isPinned: false,
        id: utilService.makeId(),
        info: {
            url: url,
        },
        style: {
            backgroundColor: "#00d"
        },
    }
    return note
}

function _createTodoNote(){
    const note = {
        type: "todo",
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