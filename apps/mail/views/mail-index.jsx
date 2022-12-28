const { useState, useEffect } = React

import { MailList } from "../cmps/mail-list.jsx"
import { MailFilter } from "../cmps/mail-filter.jsx"
import { MailSideBar } from "../cmps/mail-sidebar.jsx"

import { mailService } from "../services/mail.service.js"

export function MailIndex() {

    const [mails,setMails]=useState([])

    useEffect(()=>{
        loadMails()

    },[])

    function loadMails(){
        mailService.query().then((mailsToUpdate)=>{
            setMails(mailsToUpdate)

            })
    }

    return <main className="mail-index-container">
        <div className="sidebar-container">
        <MailFilter/>
        </div>

        <div className="mail-content-container">

        <MailSideBar/>
        <MailList mails={mails}/>
        </div>
    </main>
}

