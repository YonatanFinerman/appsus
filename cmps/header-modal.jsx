const { Link, NavLink, useNavigate, } = ReactRouterDOM

export function HeaderModal({ setHmodal }) {
    const navigate = useNavigate()

    return <div className="header-modal">

        <img src="./assets/img/Gmail-logo.png" className="modal-gmail-logo" onClick={() => {
            setHmodal(false)
            navigate("/mail")
        }} alt="" />
        <img src="./assets/img/notes.png" onClick={() => {
            setHmodal(false)
            navigate("/note") }} alt="" />
        <img src="./assets/img/about.png" alt="" onClick={() => {
            setHmodal(false)
            navigate("/about")
        }} />
        <img src="./assets/img/books-logo1.svg" alt="" />
    </div>
}