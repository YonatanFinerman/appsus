const { useParams, useNavigate, Link, Outlet } = ReactRouterDOM
const { useEffect, useState } = React

import { mailService } from "../services/mail.service.js"

import { MailSideBar } from "../cmps/mail-sidebar.jsx"

export function MailDetails(){
    const [currMail,setMail] = useState({})
    let params = useParams()
    let navigate = useNavigate()

    useEffect(()=>{
        loadMailInfo()
    },[])

    function loadMailInfo(){
        mailService.get(params.mailId).then(mail=>{
            // const {subject,body,name,to,from,isStared} = mail
            setMail(mail)
        })
    }
    

 
    console.log('this is mail',currMail)

    return <section className="mail-details-page">

        {/* <MailSideBar/> */}

        <section className="mail-details">
        <div className="details-btns-container">
            <div className="mail-details-actions-btns-container">
                <button className="fa-regular star-nav"></button>
                <button className="fa-regular star-nav"></button>
                <button className="fa-regular star-nav"></button>
                <button className="fa-regular star-nav"></button>
                <button className="fa-regular star-nav"></button>
                <button className="fa-regular star-nav"></button>
             
            </div>
            <div className="mail-details-paging">
             <small></small>
            <button className="fa-regular star-nav "></button>
            <button className="fa-regular star-nav"></button>
            </div>
        </div>
            <h2>{currMail.subject}</h2>
            <div>
                <p>{currMail.name}</p>
                <small>{currMail.from}</small>
            </div>
            <div>{currMail.body}</div>

    </section>
    </section>
}