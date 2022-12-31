
import { MailPreview } from "./mail-preview.jsx"

export function MailList({mails,onMailPreviewClick,onDeleteMailClick,onToggleRead,onToggleStared,onToggleSelect}) {

    return <section className="mail-list">
        {mails.map(mail=>{
            return <MailPreview key={mail.id} mail={mail}
             onMailPreviewClick={onMailPreviewClick} onDeleteMailClick={onDeleteMailClick}
              onToggleRead={onToggleRead} onToggleStared={onToggleStared} onToggleSelect={onToggleSelect}/>
        })}
    </section>
        
}
