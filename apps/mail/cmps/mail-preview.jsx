const { useState, useEffect } = React

export function MailPreview({ mail, onMailPreviewClick,onDeleteMailClick,onToggleRead }) {
    const { subject, body, sentAt, isRead, name, id } = mail


    const [isDate, setIsDate] = useState(true)
    const [read,setIsRead] = useState(isRead)



    function DateOrBtns() {
        if (isDate) return <div className="mail-sentAt">{sentAt}</div>
        else return <div className="mail-sentAt">
            <button onClick={()=>{onDeleteMailClick(id)}}>🗑️</button>
            <button onClick={()=>{
                onToggleRead(id)
                 setIsRead(prev=>{
                    return !prev
                 })}}>{(read) ? '📪' : '📭'}</button>
                
                    
        </div>

    }


    // className={`mail-preview ${(isRead) ? " read" : ""}`}>
    return <div className={`mail-preview ${(read) ? " read" : ""}`}
        onMouseOver={() => { setIsDate(false) }} onMouseOut={() => { setIsDate(true) }} >
        <div className="mail-prev-actions" onClick={() => { onMailPreviewClick(id) }}>
            <input type="checkbox" name="" id="" />
            <div className="mail-star">⭐</div>
            <div className="from-name">{name}</div>
        </div>
        <div className="mail-content" onClick={() => { onMailPreviewClick(id) }}>
            <div className="mail-subject">{subject}</div>
            <div className="mail-body">{body}</div>
        </div>
        <DateOrBtns />



    </div>
}