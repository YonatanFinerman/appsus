const { useState } = React

import { mailService } from "../services/mail.service.js"

export function NewMailModal({ isModalOpen, isNewModal, setIsModalOpen, setIsNewModal, onSendMail }) {

    const [modalContent, setModalContent] = useState(mailService.getEmptymail())

    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = (type === 'number') ? +value : value
        setModalContent((prevContent) => {
            return { ...prevContent, [field]: value }
        })
    }

    function MailModalHeader() {
        return <header className="mail-modal-header">
            {/* <p className="mail-modal-title">New Message</p> */}
            <p className="mail-modal-title">{(modalContent.subject) ? `${modalContent.subject}` : 'New Message'}</p>
            <div className="modal-opening-btns-cont">
                <button className="fa-solid minus" onClick={() => { setIsModalOpen(false) }}></button>
                <button className="fa-solid double-arrow" onClick={() => { setIsModalOpen(true) }}></button>
                <button className="fa-solid x" onClick={onCloseMailModal}></button>
            </div>
        </header>
    }

    function onCloseMailModal() {
        setIsModalOpen(false)
        setIsNewModal(true)
        console.log(modalContent)
    }

    function MailModalFooter() {
        return <footer className="mail-modal-footer">
            <button className="mail-modal-send-btn" onClick={() => {
                onSendMail(modalContent)
                onCloseMailModal()
            }}> Send</button>

            <div className="mail-modal-actions-btns">
                <button className="fa-solid caps"></button>
                <button className="fa-solid pin"></button>
                <button className="fa-solid link "></button>
                <button className="fa-regular emoji "></button>
                <button className="fa-solid options "></button>
                <button className="fa-regular img-icon"></button>
                <button className="fa-solid pen "></button>
                <button className="fa-solid lock "></button>
                {/* <button className="fa-solid more-options "></button> */}
            </div>
            <button className="modal-delete-btn fa-regular trash-can-black" onClick={onCloseMailModal}></button>
        </footer>
    }

    if (!isNewModal && !isModalOpen) {
        return <div className="mail-modal-header-container">
            <MailModalHeader />
        </div>
    }
    else {
        return <div className="name-mail-modal">
            <MailModalHeader />
            <form action="">
                <input
                    type="text"
                    name="to"
                    id="to"
                    className="mail-to-input"
                    value={modalContent.to}
                    onChange={handleChange}
                    placeholder="Recipients" />
                <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="mail-to-input"
                    placeholder="Subject"
                    value={modalContent.subject}
                    onChange={handleChange} />

                <textarea
                    name="body"
                    id="body"
                    type="text"
                    value={modalContent.body}
                    onChange={handleChange}
                    className="mail-body-input">
                </textarea>
            </form>
            <MailModalFooter />
        </div>
    }
}