
export function MailSideBar(){
    return <section className="mail-sidebar">
       <button className='fa-solid pen compose-btn '>    Compose</button>
       <nav className="mail-nav"> 
        <button className="fa-regular star-nav" title="Starred">    Starred</button>
        <button className="fa-regular inbox-nav" title="Inbox">    Inbox</button>
        <button className="fa-regular sent-nav" title="Sent">   Sent</button>
        
       </nav>
    </section>
}