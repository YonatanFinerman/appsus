const { useParams, useNavigate, Link, Outlet } = ReactRouterDOM
const { useEffect, useState } = React

export function Home() {
        const navigate = useNavigate()
    return <section className="home">
        <h1>Welcome to home page!</h1>
        <h2 onClick={()=>{navigate("/mail")}}>to mail</h2>
        <img src="" onClick={()=>{navigate("/mail")}} alt="" />
        <img src=""  alt="" />
        <img src="" onClick={()=>{navigate("/note")}} alt="" />
    </section>
}