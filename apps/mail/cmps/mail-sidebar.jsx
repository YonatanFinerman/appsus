
export function MailSideBar({onSetMailFilter,mailFilterBy}){

    const {isStared} = mailFilterBy

function onStared(){

    onSetMailFilter({...mailFilterBy ,isStared:true})
    // isStared=true
}
function onInbox(){
    onSetMailFilter({...mailFilterBy ,isStared:false})
}
    

    return <section className="mail-sidebar">
       <button className=' compose-btn '><span className="fa-solid pen"></span> &nbsp;&nbsp;&nbsp; Compose</button>
       <nav className="mail-nav"> 
        <button className={`fa-regular inbox-nav ${(!isStared) ? "side-bar-active" : ""}`} title="Inbox" onClick={onInbox} > &nbsp;&nbsp;&nbsp; Inbox</button>
        {/* <button className="fa-regular inbox-nav" title="Inbox" onClick={onInbox} > &nbsp;&nbsp;&nbsp; Inbox</button> */}
        <button className={`fa-regular star-nav ${(isStared) ? "side-bar-active" : ""}`} title="Starred" onClick={onStared}><span></span>&nbsp;&nbsp;&nbsp; Starred</button>
        {/* <button className={`fa-regular star-nav`} title="Starred" onClick={onStared}><span></span>&nbsp;&nbsp;&nbsp; Starred</button> */}
        <button className="fa-regular sent-nav" title="Sent">&nbsp;&nbsp;&nbsp; Sent</button>
        
       </nav>
    </section>
}