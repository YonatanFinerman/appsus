const { useState, useEffect } = React

import { utilService } from "../../../services/util.service.js"

export function MailPreview({ mail, onMailPreviewClick, onDeleteMailClick, onToggleRead, onToggleStared }) {
    const { subject, body, sentAt, isRead, name, id, isStared } = mail


    const [isDate, setIsDate] = useState(true)
    const [read, setIsRead] = useState(isRead)
    const [stared, setIsStared] = useState(isStared)

    let time
    ConvertSentAT()

    function ConvertSentAT(newTime) {
        const currTime = Date.now()
        const day = 1000 * 60 * 60 * 24
        if (currTime - sentAt < day) {
            const hours = new Date(sentAt).getHours()
            let minutes = new Date(sentAt).getMinutes()
            const amPm = (hours >= 12) ? "pm" : "am"
            if (minutes<10) minutes = "0" + minutes
            time = hours + ":" + minutes + " " + amPm
        }
        else if (currTime - sentAt < day * 365) {
            const month = utilService.getMonthName(new Date(sentAt))
            const dayNum = new Date(sentAt).getDate()
            time = dayNum + " " + month
        }
        else {
            const date = new Date(sentAt).toLocaleDateString()
            time = date
        }

    }



    function DateOrBtns() {
        if (isDate) return <div className="mail-sentAt">{time}</div>
        else return <div className="mail-sentAt">
            <button onClick={() => { onDeleteMailClick(id) }} title="Delete" className='fa-regular trash-can'></button>
            <button title={`${(read) ? " Mark as unread" : "Mark as read"}`} className={`fa-regular ${(read) ? "  envelope" : " envelope-open"}`}
                onClick={() => {
                    onToggleRead(id)
                    setIsRead(prev => {
                        return !prev
                    })
                }}></button>


        </div>

    }


    // className={`mail-preview ${(isRead) ? " read" : ""}`}>
    return <div className={`mail-preview ${(read) ? " read" : ""}`}
        onMouseOver={() => { setIsDate(false) }} onMouseOut={() => { setIsDate(true) }} >
        <div className="mail-prev-actions" >
            <input type="checkbox" name="" id="" />
            <button className={`mail-star fa-${(stared) ? "solid" : "regular"} star`} onClick={() => {

                onToggleStared(id)
                setIsStared(prev => !prev)
            }}></button>
            <div className="from-name" onClick={() => { onMailPreviewClick(id) }}>{name}</div>
        </div>
        <div className="mail-content" onClick={() => { onMailPreviewClick(id) }}>
            <div className="mail-subject">{subject}</div>
            <div className="mail-body">{body}</div>
        </div>
        <DateOrBtns />

    </div>
}