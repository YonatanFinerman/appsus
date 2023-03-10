
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
    
    return <section className="mail-sidebar">
       <button className=' compose-btn ' onClick={onComposeClick}><span className="fa-solid pen"></span> <span className="nav-btn-txt">Compose</span> </button>
       <nav className="mail-nav"> 
        <button className={` ${(status==="inbox") ? "side-bar-active" : ""}`} title="Inbox" onClick={onInbox} ><span className="fa-regular inbox-nav"></span> <span className="nav-btn-txt">Inbox</span> </button>
        {/* <button className="fa-regular inbox-nav" title="Inbox" onClick={onInbox} > &nbsp;&nbsp;&nbsp; Inbox</button> */}
        <button className={` ${(isStared) ? "side-bar-active" : ""}`} title="Stared" onClick={onStared}><span className="fa-regular star-nav"></span><span className="nav-btn-txt">Starred</span> </button>
        {/* <button className={`fa-regular star-nav`} title="Starred" onClick={onStared}><span></span>&nbsp;&nbsp;&nbsp; Starred</button> */}
        <button className={` ${(status==="sent") ? "side-bar-active" : ""}`} onClick={onSent} title="Sent"><span className="fa-regular sent-nav"></span> <span className="nav-btn-txt">Sent</span> </button>  
       </nav>
    </section>
}