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

    
    function onUnRead(){
       mailService.get(currMail.id).then((mail)=>{
            mail.isRead = false
            mailService.save(mail).then(()=>{navigate('/mail')})
       })
          
    }
     

    return  <section className="mail-details">
        <div className="details-btns-container">
            <div className="mail-details-actions-btns-container">
                <button className="fa-solid go-back" title="Go back" onClick={()=>navigate('/mail')}></button>
                <button className="fa-regular inbox-nav" title="Mark as unread" onClick={onUnRead}></button>
                <button className="fa-regular star-nav" title="Star"></button>
                <button className="fa-regular trash-can-black" title="Selete mail" onClick={()=>{
                    mailService.remove(currMail.id).then(()=>{navigate('/mail')})
                }}></button>
                <button className="fa-solid more-options"></button>
             
            </div>
            <div className="mail-details-paging">
             <small></small>
            <button className="fa-solid angle-left "></button>
            <button className="fa-solid angle-right"></button>
            </div>
        </div>
            <h2 className="mail-subject">{currMail.subject}</h2>
            <div className="from-info">
                <img src="./assets/img/person.webp" alt=""  className="profile-pic"/>
                <h3>{currMail.name}</h3>
                <small>{currMail.from}</small>
            </div>
            <div className="mail-body">{currMail.body}</div>

    </section>
 
}