import {utilService} from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const MAIL_KEY = 'mailDB'
// _createBooks()


export const mailService = {
    query,
    get,
    remove,
    save,
    getDefaultFilter,
    getEmptyReview,
}

// function query(filterBy = getDefaultFilter()) {
//     return storageService.query(BOOK_KEY)
//         .then(books => {
//             if (filterBy.title) {
//                 const regex = new RegExp(filterBy.title, 'i')
//                 books = books.filter(book => regex.test(book.title))
//             }
//             if (filterBy.amount) {
//                 console.log(books, filterBy.amount)
//                 books = books.filter(book => book.listPrice.amount >= filterBy.amount)
//             }
//             return books
//         })
// }

function query() {
    return storageService.query(MAIL_KEY)
}


function get(mailId) {
  let mail = storageService.get(MAIL_KEY,mailId)
  console.log('get',mail)
    return mail
    
}

function remove(mailId) {
    return storageService.remove(MAIL_KEY, mailId)
}

function save(mail) {
    if (mail.id) {
        return storageService.put(MAIL_KEY, mail)
    } else {
        return storageService.post(MAIL_KEY, mail)
    }
}



// function getDefaultFilter() {
//     return { title: '', amount: '' }
// }

// function getEmptyReview(){
//   return {reviewrName:'',score:'',reviewTxt:''}
// }








function _createMail(title) {
    return {
        id: utilService.makeId(),
        title,
        description: utilService.makeLorem(8),
        thumbnail: `../assets/img/${title}.jpg`,
        listPrice: {
            amount: utilService.getRandomIntInclusive(10, 100),
            currencyCode: "EUR",
            isOnSale: false
        }

    }
}
function _createMail(subject,body) {
    return {
        id: utilService.makeId(),
        subject,
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt : Date.now(),
        to: 'momo@momo.com',

        description: utilService.makeLorem(8),
        thumbnail: `../assets/img/${title}.jpg`,
        listPrice: {
            amount: utilService.getRandomIntInclusive(10, 100),
            currencyCode: "EUR",
            isOnSale: false
        }

    }
}

const email = {
    id: 'e101',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt : 1551133930594,
    to: 'momo@momo.com'
    }
    
    const loggedinUser = {
        email: 'user@appsus.com',
        fullname: 'Mahatma Appsus'
       }

// function _createBooks() {
//     let books = utilService.loadFromStorage(BOOK_KEY)
//     console.log('from storage', books)
//     if (!books || !books.length) {
//         books = []
//         books.push(_createBook('The alchemist'))
//         books.push(_createBook('The hunger games'))
//         books.push(_createBook('Think and grow rich'))        
//         utilService.saveToStorage(BOOK_KEY, books)
//         console.log('from reg', books)

//     }
// }

