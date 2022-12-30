
export function NewMailModal() {

    function MailModalHeader() {
        return <header className="mail-modal-header">
            <p className="mail-modal-title">New Message</p>
            <div>
                <button className="fa-solid minus"></button>
                <button className="fa-solid double-arrow"></button>
                <button className="fa-solid x"></button>
            </div>
        </header>
    }

    function MailModalFooter(){
        return <footer className="mail-modal-footer">
            <button className="mail-modal-send-btn">Send</button>
            <div className="mail-modal-actions-btns">
                <button className="fa-solid caps"></button>
                <button className="fa-solid pin"></button>
                <button className="fa-solid link "></button>
                <button className="fa-regular emoji "></button>
                <button className="fa-solid options "></button>
                <button className="fa-regular img-icon"></button>
                <button className="fa-solid pen "></button>
                <button className="fa-solid lock "></button>
                <button className="fa-solid more-options "></button>
            </div>
            <button className="modal-delete-btn fa-regular trash-can-black"></button>
        </footer>
    }

    return <div className="name-mail-modal">
        <MailModalHeader/>
        <form action="">
            <input
                type="mail-to-input"
                name="mail-to-input"
                id="mail-to-input"
                className="mail-to-input"
                placeholder="Recipients" />
            <input
                type="mail-subject-input"
                name="mail-to-input"
                id="mail-subject-input"
                className="mail-to-input"
                placeholder="Subject" />

            <textarea 
            name="Text1" 
            className="mail-body-input">
            </textarea>
        </form>
        <MailModalFooter/>
    </div>
}