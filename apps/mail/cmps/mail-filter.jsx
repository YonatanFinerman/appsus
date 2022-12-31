import { mailService } from "../services/mail.service.js"

const { useState, useEffect } = React

export function MailFilter({onSetMailFilter,mails}){
    const [mailFilterBytoEdit, setMailFilterBytoEdit] = useState(mailService.getDefaultCriteria())

    useEffect(() => {
        onSetMailFilter(mailFilterBytoEdit)
    }, [mailFilterBytoEdit])

        function handleChange({ target }) {
        let { value, name: field, type } = target
        value = (type === 'number') ? +value : value
        setMailFilterBytoEdit((prevFilter) => {
            return { ...prevFilter, [field]: value }
        })
    }

    function UnReadCount(){
        const unReadCount = mails.filter(mail=>!mail.isRead)
        return <p className="unread-count">{unReadCount.length + " unread"}</p>
    }

    return <section className="mail-filter">
        <div className="filter-actions">
        <UnReadCount/>
        <select name="isRead" id="" placeholder="select type" className="select-type" onChange={handleChange}>
            <option value=""></option>
            <option value={true}>read</option>
            <option value={false}>unread</option>
        </select>
        </div>
        <form action="" className='mail-filter-form '>
        <button type='button' onClick={()=>{onSetMailFilter(mailFilterBytoEdit)}} className="fa-solid search"></button>
        <input type="text"
            name="txt"
            placeholder="Search mail"
            value={mailFilterBytoEdit.txt || ''}
            id='mail-search'
            title=""
            className="mail-search"
            onChange={handleChange} />

    </form>
    </section>
}
