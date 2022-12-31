const { useParams, useNavigate, Link, Outlet } = ReactRouterDOM
const { useEffect, useState } = React

export function Home() {
        const navigate = useNavigate()
    return <section className="home">
        {/* <h1>Welcome to home page!</h1>
        <h2 onClick={()=>{navigate("/mail")}}>to mail</h2> */}
        <div className="app-imgs-container">

        {/* <img src="../../../assets/img/Gmail-logo.png" className="mail-logo" onClick={()=>{navigate("/mail:inbox")}} alt="" /> */}
        {/* <img src="/assets/img/Gmail-logo.png" className="mail-logo" onClick={()=>{navigate("/mail")}} alt="" />
        <img src="/assets/img/notes.png" onClick={()=>{navigate("/note")}} alt="" />
        <img src="/assets/img/books-logo1.svg"  alt="" /> */}
        <img src="./assets/img/Gmail-logo.png" className="mail-logo" onClick={()=>{navigate("/mail")}} alt="" />
        <img src="./assets/img/notes.png" onClick={()=>{navigate("/note")}} alt="" />
        <img src="./assets/img/books-logo1.svg"  alt="" />

      
       
        </div>
    </section>
}