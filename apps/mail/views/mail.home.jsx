// const { useState, useEffect } = React

// import { MailList } from "../cmps/mail-list.jsx"

// import { mailService } from "../services/mail.service.js"

// export function MailHome(){


//     const [mails,setMails]=useState([])

//     useEffect(()=>{
//         loadMails()

//     },[])

//     function loadMails(){
//         mailService.query().then((mailsToUpdate)=>{
//             setMails(mailsToUpdate)

//             })
//     }

//     return <MailList mails={mails}/>
// }