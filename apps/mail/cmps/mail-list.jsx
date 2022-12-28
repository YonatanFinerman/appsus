
import { MailPreview } from "./mail-preview.jsx"

export function MailList({mails}) {


    console.log('from list',mails)

    return <section>
        {mails.map(mail=>{
            return <MailPreview key={mail.id} mail={mail}/>
        })}
    </section>
        

}