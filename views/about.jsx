const { Link, NavLink } = ReactRouterDOM

import { utilService } from "../services/util.service.js"


export function About() {
    return <section className="about">
        
        <div className="about-ifno">
            
            <h2 className="about-title">About - Appsus</h2>
            <p className="about-txt">Appsus is an app where you can find a solution to all your is from finding information  about any book 
                to sending and mails or creating lists of notes and reminders.
                with appsus your {utilService.makeLorem(200)}
            </p>
            <h3 className="team-title">Our team</h3>
            <div className="team">
           
             
             
                <article className="team-member">
                    <h3 className="member-name">Yonatan Finerman</h3>
                    <img src="./assets/img/person.webp" className="profile-pic3" alt="" />
                    <p className="info-team-memeber">Developed the Mr.Email application we provide and {utilService.makeLorem(20)}</p>
                    <nav>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" className="fa-brands linkedin"></a>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" className="fa-brands twitter"></a>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" className="fa-brands instagram"></a>
                  
                       
                    </nav>
                </article>
                <article className="team-member">
                    <h3 className="member-name">Shachak Armon</h3>
                    <img src="./assets/img/person.webp" className="profile-pic3" alt="" />
                    <p className="info-team-memeber">Developed the Mrs.Notes application we provide and {utilService.makeLorem(20)}</p>
                    <nav>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" className="fa-brands linkedin"></a>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" className="fa-brands twitter"></a>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" className="fa-brands instagram"></a>
                  
                       
                    </nav>
                </article>
               
            </div>
        </div>
    </section>
}
