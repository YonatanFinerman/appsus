
export function MailSideBar(){
    return <section className="mail-sidebar">
       <button className='fa-solid pen compose-btn '>    Compose</button>
       <nav className="mail-nav"> 
        {/* <button className='fa-solid pen '>  Inbox</button> */}
        <button className="fa-regular star-nav">    Stared</button>
        <button className="fa-regular box-nav">    Inbox</button>
      
        <button>Sent</button>
        
       </nav>
    </section>
}