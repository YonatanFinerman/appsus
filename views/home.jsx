const { useNavigate } = ReactRouterDOM

export function Home() {
    const navigate = useNavigate()
    return <section className="home">

        <div className="app-imgs-container">
            <img src="./assets/img/Gmail-logo.png" className="mail-logo" onClick={() => { navigate("/mail") }} alt="" />
            <img src="./assets/img/notes.png" onClick={() => { navigate("/note") }} alt="" />
            <img src="./assets/img/books-logo1.svg" alt="" />

        </div>
    </section>
}