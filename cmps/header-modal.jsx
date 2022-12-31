const { Link, NavLink, useNavigate,} = ReactRouterDOM

export function HeaderModal(){

    const navigate = useNavigate()
    
    return <div className="header-modal">
        
        <img src="./assets/img/Gmail-logo.png" className="modal-gmail-logo"  onClick={()=>{navigate("/mail")}} alt="" />
        <img src="./assets/img/notes.png" onClick={()=>{navigate("/note")}} alt="" />
        <img src="./assets/img/about.png" alt=""  onClick={()=>{navigate("/about")}} />
        <img src="./assets/img/books-logo1.svg"  alt="" />
    </div>
}