import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const MAIL_KEY = 'mailDB'
_createMails()

export const mailService = {
    query,
    get,
    remove,
    save,
    getDefaultCriteria,
    getEmptymail,
    getLoggedInUser,
}

function getEmptymail(){
    return {to:'',subject:'',body:''}
}

function getDefaultCriteria() {
    return { isRead: false, txt: '', isStared: false, lables: [], status: 'inbox' }
}

function query(filterBy = getDefaultCriteria()) {
    console.log('this is filter',filterBy)
    const user = getLoggedInUser()
    return storageService.query(MAIL_KEY)
        .then(mails => {
            mails.sort((a, b) => {
                return b.sentAt - a.sentAt
            })
            if(filterBy.isRead==="false"){
                mails = mails.filter(mail=>!mail.isRead)
            }
            if(filterBy.isRead==="true"){
                mails = mails.filter(mail=>mail.isRead)
            }
            if (filterBy.txt) {
                const regex = new RegExp(filterBy.txt, 'i')
                mails = mails.filter(mail => regex.test(mail.subject) || regex.test(mail.body) || regex.test(mail.name))
            }
            if(filterBy.status==="inbox"){
                mails = mails.filter(mail=>mail.to===user.email)
            }
            if(filterBy.status==="sent"){
                mails = mails.filter(mail=>mail.to!==user.email)
            }
            if (filterBy.isStared){
                mails = mails.filter(mail=>mail.isStared)
            }
            return mails
        })
}

function get(mailId) {
    let mail = storageService.get(MAIL_KEY, mailId)
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

function getLoggedInUser(){
    return {
        email: 'user@appsus.com',
        name: 'Mahatma Appsus'
    }
}

function _createMail(subject, name, body) {
    const user = getLoggedInUser()
    const randomNum = utilService.getRandomIntInclusive(0,100)
    return {
        id: utilService.makeId(),
        subject: subject + " " + utilService.makeLorem(3),
        body: body + " " + utilService.makeLorem(randomNum),
        name,
        isRead: false,
        sentAt: (Date.now() - utilService.getRandomIntInclusive(0, 63113904000)),
        from: `${name}@momo.com`,
        to:user.email,
        isStared:false,
        isSelected:false,
    }
}

function _createMails() {
    let mails = utilService.loadFromStorage(MAIL_KEY)

    if (!mails || !mails.length) {
        mails = []
        mails.push(_createMail('shrek', 'shrek', 'only shrek will fix this country\' problems vote for shrek '))
        mails.push(_createMail('Netflix', 'Netflix', 'Your subscription is about to end plz give us your money'))
        mails.push(_createMail('Work', 'bigboss', 'There is a new task you need to do for next week'))
        mails.push(_createMail('yerakot', 'moshe', 'tikne tapuhim'))
        mails.push(_createMail('yotvata', 'moti', 'Give me some milk'))
        mails.push(_createMail('order', 'ebay', 'Your order is on the way'))
        mails.push(_createMail('match', 'tinder', 'You have a new match with simon leviev'))
        mails.push(_createMail('sprint12', 'ca', 'for this sprint youll need to create a function that returns happyness'))
        mails.push(_createMail('shrek', 'shrek', 'only shrek will fix this country\' problems vote for shrek '))
        mails.push(_createMail('Netflix', 'Netflix', 'Your subscription is about to end plz give us your money'))
        mails.push(_createMail('Work', 'bigboss', 'There is a new task you need to do for next week'))
        mails.push(_createMail('yerakot', 'moshe', 'tikne tapuhim'))
        mails.push(_createMail('yotvata', 'moti', 'Give me some milk'))
        mails.push(_createMail('order', 'ebay', 'Your order is on the way'))
        mails.push(_createMail('match', 'tinder', 'You have a new match with simon leviev'))
        mails.push(_createMail('sprint12', 'ca', 'for this sprint youll need to create a function that returns happyness'))
        mails.push(_createMail('shrek', 'shrek', 'only shrek will fix this country\' problems vote for shrek '))
        mails.push(_createMail('Netflix', 'Netflix', 'Your subscription is about to end plz give us your money'))
        mails.push(_createMail('Work', 'bigboss', 'There is a new task you need to do for next week'))
        mails.push(_createMail('yerakot', 'moshe', 'tikne tapuhim'))
        mails.push(_createMail('yotvata', 'moti', 'Give me some milk'))
        mails.push(_createMail('order', 'ebay', 'Your order is on the way'))
        mails.push(_createMail('match', 'tinder', 'You have a new match with simon leviev'))
        mails.push(_createMail('sprint12', 'ca', 'for this sprint youll need to create a function that returns happyness'))
        mails.push(_createMail('shrek', 'shrek', 'only shrek will fix this country\' problems vote for shrek '))
        mails.push(_createMail('Netflix', 'Netflix', 'Your subscription is about to end plz give us your money'))
        mails.push(_createMail('Work', 'bigboss', 'There is a new task you need to do for next week'))
        mails.push(_createMail('yerakot', 'moshe', 'tikne tapuhim'))
        mails.push(_createMail('yotvata', 'moti', 'Give me some milk'))
        mails.push(_createMail('order', 'ebay', 'Your order is on the way'))
        mails.push(_createMail('match', 'tinder', 'You have a new match with simon leviev'))
        mails.push(_createMail('sprint12', 'ca', 'for this sprint youll need to create a function that returns happyness'))
        mails.push(_createMail('shrek', 'shrek', 'only shrek will fix this country\' problems vote for shrek '))
        mails.push(_createMail('Netflix', 'Netflix', 'Your subscription is about to end plz give us your money'))
        mails.push(_createMail('Work', 'bigboss', 'There is a new task you need to do for next week'))
        mails.push(_createMail('yerakot', 'moshe', 'tikne tapuhim'))
        mails.push(_createMail('yotvata', 'moti', 'Give me some milk'))
        mails.push(_createMail('order', 'ebay', 'Your order is on the way'))
        mails.push(_createMail('match', 'tinder', 'You have a new match with simon leviev'))
        mails.push(_createMail('sprint12', 'ca', 'for this sprint youll need to create a function that returns happyness'))
        mails.push(_createMail('shrek', 'shrek', 'only shrek will fix this country\' problems vote for shrek '))
        mails.push(_createMail('Netflix', 'Netflix', 'Your subscription is about to end plz give us your money'))
        mails.push(_createMail('Work', 'bigboss', 'There is a new task you need to do for next week'))
        mails.push(_createMail('yerakot', 'moshe', 'tikne tapuhim'))
        mails.push(_createMail('yotvata', 'moti', 'Give me some milk'))
        mails.push(_createMail('order', 'ebay', 'Your order is on the way'))
        mails.push(_createMail('match', 'tinder', 'You have a new match with simon leviev'))
        mails.push(_createMail('sprint12', 'ca', 'for this sprint youll need to create a function that returns happyness'))
        mails.push(_createMail('shrek', 'shrek', 'only shrek will fix this country\' problems vote for shrek '))
        mails.push(_createMail('Netflix', 'Netflix', 'Your subscription is about to end plz give us your money'))
        mails.push(_createMail('Work', 'bigboss', 'There is a new task you need to do for next week'))
        mails.push(_createMail('yerakot', 'moshe', 'tikne tapuhim'))
        mails.push(_createMail('yotvata', 'moti', 'Give me some milk'))
        mails.push(_createMail('order', 'ebay', 'Your order is on the way'))
        mails.push(_createMail('match', 'tinder', 'You have a new match with simon leviev'))
        mails.push(_createMail('sprint12', 'ca', 'for this sprint youll need to create a function that returns happyness'))
        mails.push(_createMail('sprint12', 'ca', 'for this sprint youll need to create a function that returns happyness'))
        mails.push(_createMail('shrek', 'shrek', 'only shrek will fix this country\' problems vote for shrek '))
        mails.push(_createMail('Netflix', 'Netflix', 'Your subscription is about to end plz give us your money'))
        mails.push(_createMail('Work', 'bigboss', 'There is a new task you need to do for next week'))
        mails.push(_createMail('yerakot', 'moshe', 'tikne tapuhim'))
        mails.push(_createMail('yotvata', 'moti', 'Give me some milk'))
        mails.push(_createMail('order', 'ebay', 'Your order is on the way'))
        mails.push(_createMail('match', 'tinder', 'You have a new match with simon leviev'))
        mails.push(_createMail('sprint12', 'ca', 'for this sprint youll need to create a function that returns happyness'))
        mails.push(_createMail('shrek', 'shrek', 'only shrek will fix this country\' problems vote for shrek '))
        mails.push(_createMail('Netflix', 'Netflix', 'Your subscription is about to end plz give us your money'))
        mails.push(_createMail('Work', 'bigboss', 'There is a new task you need to do for next week'))
        mails.push(_createMail('yerakot', 'moshe', 'tikne tapuhim'))
        mails.push(_createMail('yotvata', 'moti', 'Give me some milk'))
        mails.push(_createMail('order', 'ebay', 'Your order is on the way'))
        mails.push(_createMail('match', 'tinder', 'You have a new match with simon leviev'))
        mails.push(_createMail('sprint12', 'ca', 'for this sprint youll need to create a function that returns happyness'))
        mails.sort((a, b) => {
            return b.sentAt - a.sentAt
        })
        
        utilService.saveToStorage(MAIL_KEY, mails)

    }
}

