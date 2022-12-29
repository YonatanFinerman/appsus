const { useState, useEffect } = React
const { useParams, useNavigate, Link, Outlet } = ReactRouterDOM

import { MailList } from "../cmps/mail-list.jsx"
import { MailFilter } from "../cmps/mail-filter.jsx"
import { MailSideBar } from "../cmps/mail-sidebar.jsx"
// import { MailHome } from "./mail.home.jsx"

import { mailService } from "../services/mail.service.js"

export function MailIndex() {

    const [mailFilterBy, onSetMailFilter] = useState([mailService.getDefaultCriteria()])
    const [mails, setMails] = useState([])
    // const [starredMails,setStarredMails] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        console.log('load',mailFilterBy)
        loadMails()

    }, [mailFilterBy])

    function loadMails() {
        mailService.query(mailFilterBy).then((mailsToUpdate) => {
            setMails(mailsToUpdate)

        })
    }
    function onMailPreviewClick(mailId) {
        console.log('mailId', mailId)
        mailService.get(mailId).then(mail => {
            mail.isRead = true
            mailService.save(mail).then(() => {
                
                navigate(`/mail/:${mailId}`)
            })

        })
            .catch(err => {
                console.error('there was an error with the id')
            })


    }

    function onDeleteMailClick(mailId) {
        mailService.remove(mailId).then(() => {
            const updatedMails = mails.filter(mail => mailId !== mail.id)
            setMails(updatedMails)
        })
            .catch(err => {
                console.error('there was an error with the id')
            })

    }
    function onToggleRead(mailId) {
        mailService.get(mailId).then(mail => {
            mail.isRead = !mail.isRead
            mailService.save(mail)

        })

    }
    function onToggleStared(mailId) {
        mailService.get(mailId).then(mail => {
            mail.isStared = !mail.isStared
            mailService.save(mail)
            
        })

    }

    return <main className="mail-index-container">

            <MailSideBar onSetMailFilter={onSetMailFilter} mailFilterBy={mailFilterBy}/>

        <div className="mail-content-container">
        <MailFilter onSetMailFilter={onSetMailFilter} />
            <MailList mails={mails} onMailPreviewClick={onMailPreviewClick}
             onDeleteMailClick={onDeleteMailClick} onToggleRead={onToggleRead} onToggleStared={onToggleStared} />
            {/* <MailHome/> */}

        </div>
    </main>
}

