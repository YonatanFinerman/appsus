const { useState, useEffect } = React

export function MailPreview({ mail,onMailPrevClick }) {
    const { subject, body, sentAt, isRead,name } = mail
    

const [isDate,setIsDate]=useState(true)

  
    function DateOrBtns(){
        if (isDate) return <div className="mail-sentAt">{sentAt}</div>
       else  return <div className="mail-sentAt">
        <button>🗑️</button>
        <button>{(isRead)? '📪':'📭'}</button>
       </div>
        
    }


    
    return <div className={(isRead) ? "wasRead " : '' + "mail-preview"} 
    onMouseOver={()=>{setIsDate(false)}} onMouseOut={()=>{setIsDate(true)}} onClick={onMailPrevClick}>
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
        


    </div>
}