const { useState, useEffect } = React
const { useParams, useNavigate, Link, Outlet } = ReactRouterDOM

import { MailList } from "../cmps/mail-list.jsx"
import { MailFilter } from "../cmps/mail-filter.jsx"
import { MailSideBar } from "../cmps/mail-sidebar.jsx"
// import { MailHome } from "./mail.home.jsx"

import { mailService } from "../services/mail.service.js"

export function MailIndex() {

    const [mails, setMails] = useState([])
    // const [mail,setMail] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        loadMails()

    }, [])

    function loadMails() {
        mailService.query().then((mailsToUpdate) => {
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

    return <main className="mail-index-container">

        <MailFilter />

        <div className="mail-content-container">
            <MailSideBar />
            <MailList mails={mails} onMailPreviewClick={onMailPreviewClick} onDeleteMailClick={onDeleteMailClick} onToggleRead={onToggleRead} />
            {/* <MailHome/> */}

        </div>
    </main>
}

