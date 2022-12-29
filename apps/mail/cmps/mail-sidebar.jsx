
export function MailSideBar(){
    return <section className="mail-sidebar">
       <button className='fa-solid pen compose-btn '> &nbsp;&nbsp; Compose</button>
       <nav className="mail-nav"> 
        <button className="fa-regular star-nav" title="Starred"><span></span>&nbsp;&nbsp; Starred</button>
        <button className="fa-regular inbox-nav" title="Inbox"> &nbsp;&nbsp; Inbox</button>
        <button className="fa-regular sent-nav" title="Sent">&nbsp;&nbsp; Sent</button>
        
       </nav>
    </section>
}