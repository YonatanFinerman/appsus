const { useState, useEffect } = React

export function MailPreview({ mail }) {
    const { subject, body, sentAt, isRead,name } = mail
    console.log(name)

const [isDate,setIsDate]=useState(true)

    function onHoverPreview(){
        console.log('hi')
    }

    function DateOrBtns(){
        if (isDate) return <div className="mail-sentAt">{sentAt}</div>
       else  return <div className="mail-sentAt">{sentAt}</div>
        // else return <div>
    
    }


    

    // const formatedTime = sentAt.getTime()
    console.log(sentAt)
    return <div className={(isRead) ? "wasRead " : '' + "mail-preview"} onMouseOver={onHoverPreview} >
        <div className="mail-prev-actions">
        <input type="checkbox" name="" id="" />
        <div className="mail-star">⭐</div>
        <div className="from-name">{name}</div>
        </div>
        <div className="mail-content">
        <div className="mail-subject">{subject}</div>
        <div className="mail-body">{body}</div>
        </div>
        <DateOrBtns/>
        <div className="mail-sentAt">{sentAt}</div>


    </div>
}