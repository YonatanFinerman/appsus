const { useState, useEffect } = React
const { useParams, useNavigate, Link, Outlet } = ReactRouterDOM

import { MailList } from "../cmps/mail-list.jsx"
import { MailFilter } from "../cmps/mail-filter.jsx"
import { MailSideBar } from "../cmps/mail-sidebar.jsx"
import { NewMailModal } from "../cmps/new-mail-modal.jsx"
// import { MailHome } from "./mail.home.jsx"

import { mailService } from "../services/mail.service.js"
import { utilService } from "../../../services/util.service.js"

export function MailIndex() {

    const [mailFilterBy, onSetMailFilter] = useState([mailService.getDefaultCriteria()])
    const [mails, setMails] = useState([])
    // const [starredMails,setStarredMails] = useState()

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isNewModal, setIsNewModal] = useState(true)


    const navigate = useNavigate()

    useEffect(() => {
        console.log('load', mailFilterBy)
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

                navigate(`/mail/${mailId}`)
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

    function onComposeClick() {
        if (isNewModal && !isModalOpen) {
            setIsModalOpen(true)
            setIsNewModal(false)
        }
        else if (!isNewModal && !isModalOpen) {
            setIsModalOpen(true)
        }
        else if (!isNewModal && isModalOpen) {
            setIsModalOpen(false)
        }
    }

    function onSendMail(val) {
        
        const user = mailService.getLoggedInUser()
        const { subject, body, to } = val
        const { name, email: from } = user
        
        const newMail = {
            subject,
            body,
            to,
            name,
            from,
            isRead:false,
            isStared:false,
            sentAt:Date.now()
        }
        console.log('new mailll',newMail)
        mailService.save(newMail).then(()=>{

            loadMails()
            // loadmails isNeedInCase we are on the sent mail page 
            // later use loadmails or setmails by checking on the current mails array if its a sent mail a inbox mail
        })

    }




    return <main className="mail-index-container">

        <MailSideBar onSetMailFilter={onSetMailFilter} mailFilterBy={mailFilterBy} onComposeClick={onComposeClick} />

        <div className="mail-content-container">
            <MailFilter onSetMailFilter={onSetMailFilter} />
            <MailList mails={mails} onMailPreviewClick={onMailPreviewClick}
                onDeleteMailClick={onDeleteMailClick} onToggleRead={onToggleRead} onToggleStared={onToggleStared} />

        </div>

        {(isModalOpen || !isNewModal) && <NewMailModal isModalOpen={isModalOpen} isNewModal={isNewModal} onSendMail={onSendMail} setIsNewModal={setIsNewModal} setIsModalOpen={setIsModalOpen} />}
    </main>
}

