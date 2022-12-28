
export function MailPreview({mail}){
    const {subject,body,sentAt} = mail
    return <div className="mail-preview">
        <div className="mail-subject">{subject}</div>
        <div className="mail-body">{body}</div>
        <div className="mail-sentAt">{sentAt}</div>
        
        
        </div>
}