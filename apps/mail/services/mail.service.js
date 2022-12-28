import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const MAIL_KEY = 'mailDB'
_createMails()


export const mailService = {
    query,
    get,
    remove,
    save,
    // getDefaultFilter,
    // getEmptyReview,
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
    let mail = storageService.get(MAIL_KEY, mailId)
    console.log('get', mail)
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









function _createMail(subject,name, body) {
    return {
        id: utilService.makeId(),
        subject,
        body,
        isRead: false,
        sentAt: Date.now() - utilService.getRandomIntInclusive(0, 63113904000),
        from:`${name}@momo.com`,
        to:null

    }
}

function _createMails(){
    let mails = utilService.loadFromStorage(MAIL_KEY)
    console.log('from storage', mails)
    console.log('from storage', mails)
    if (!mails || !mails.length) {
        mails = []
        mails.push(_createMail('shrek','shrek','only shrek will fix this country\' problems vote for shrek '))
        mails.push(_createMail('Netflix','Netflix','Your subscription is about to end plz give us your money'))
        mails.push(_createMail('Work','bigboss','There is a new task you need to do for next week'))        
        mails.push(_createMail('yerakot','moshe','tikne tapuhim'))        
        mails.push(_createMail('yotvata','moti','Give me some milk'))        
        mails.push(_createMail('order','ebay','Your order is on the way'))        
        mails.push(_createMail('match','tinder','You have a new match with simon leviev'))        
        mails.push(_createMail('sprint12','codingacademy','for this sprint youll need to create a function that returns happyness'))        
        utilService.saveToStorage(MAIL_KEY, mails)
        console.log('from reg', mails)

    }
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

// const criteria = {
//     status: 'inbox/sent/trash/draft',
//     txt: 'puki', // no need to support complex text search
//     isRead: true, // (optional property, if missing: show all)
//     isStared: true, // (optional property, if missing: show all)
//     lables: ['important', 'romantic'] // has any of the labels
//    }
   



const email = {
    id: 'e101',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com'
}

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}



