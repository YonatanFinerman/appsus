
export function MailSideBar({onSetMailFilter,mailFilterBy,onComposeClick}){

    const {isStared,status} = mailFilterBy

function onStared(){

    onSetMailFilter({...mailFilterBy ,isStared:true,status:''})
    // isStared=true
}
function onInbox(){
    onSetMailFilter({...mailFilterBy ,isStared:false,status:'inbox'})
}

function onSent(){
    onSetMailFilter({...mailFilterBy ,isStared:false,status:'sent'})
}
    
// className={`fa-regular sent-nav ${(status==="sent") ? "side-bar-active" : ""}`}

    return <section className="mail-sidebar">
       <button className=' compose-btn ' onClick={onComposeClick}><span className="fa-solid pen"></span> &nbsp;&nbsp;&nbsp; Compose</button>
       <nav className="mail-nav"> 
        <button className={`fa-regular inbox-nav ${(status==="inbox") ? "side-bar-active" : ""}`} title="Inbox" onClick={onInbox} > &nbsp;&nbsp;&nbsp; Inbox</button>
        {/* <button className="fa-regular inbox-nav" title="Inbox" onClick={onInbox} > &nbsp;&nbsp;&nbsp; Inbox</button> */}
        <button className={`fa-regular star-nav ${(isStared) ? "side-bar-active" : ""}`} title="Stared" onClick={onStared}><span></span>&nbsp;&nbsp;&nbsp; Starred</button>
        {/* <button className={`fa-regular star-nav`} title="Starred" onClick={onStared}><span></span>&nbsp;&nbsp;&nbsp; Starred</button> */}
        <button className={`fa-regular sent-nav ${(status==="sent") ? "side-bar-active" : ""}`} onClick={onSent} title="Sent">&nbsp;&nbsp;&nbsp; Sent</button>
        
       </nav>
    </section>
}