const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from "./cmps/app-header.jsx"
import { About } from "./views/about.jsx"
import { Home } from "./views/home.jsx"
import { MailIndex } from "./apps/mail/views/mail-index.jsx"
import { MailDetails } from "./apps/mail/views/mail-details.jsx"
import { NoteIndex } from "./apps/note/views/note-index.jsx"



export function App() {
    return <Router>
        <section className="app">
            <AppHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                
                {/* <Route path="/mail:status" element={<MailIndex />} /> */}
                <Route path="/mail" element={<MailIndex />} />
                {/* <Route path="/mail/detail/:mailId" element={<MailDetails />} /> */}
                <Route path="/mail/:mailId" element={<MailDetails />} />

                <Route path="/note" element={<NoteIndex />} />
            </Routes>
        </section>
    </Router>
}
