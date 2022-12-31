const { Link, NavLink } = ReactRouterDOM
const { useEffect, useState } = React

import { HeaderModal } from "./header-modal.jsx"



export function AppHeader() {

    const [isHModalOpen,setHmodal] = useState(false)

    return <header className="app-header">
        <Link to="/">
            <h3 className='logo'>Appsus</h3>
        </Link>
        <nav>
            {/* <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/mail">Mail</NavLink>
            <NavLink to="/note">Note</NavLink> */}
            <div className="header-nav">
            <button onClick={()=>{setHmodal(prev=>!prev)}} ><img src="./assets/img/menu.png" alt="" className="menu-btn"/></button>
            <img src="./assets/img/person.webp" className="profile-pic1" alt="" />
        </div>
        </nav>

        {(isHModalOpen) && <HeaderModal/>}
    </header>
}
