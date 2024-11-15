import { Link } from "react-router-dom";
import './Home.css'

export default function Home(){
    return(
        <div className="container">
            <div className="Display-container" >  
            <h1>Welcome to GUVI</h1>
            <p><em>Enroll today & Upskill yourself</em></p>
            </div>
            <div className="centre-container">
                <p>ZEN class is one of the industry's leading Project Based Career Programs offered by GUVI
                     that promises Placement Guidance on completing the course.</p>
                     <div className="row">             
                         <div className="card col-3">
                            <img src="/images/fsd.webp" className="card-img-top" alt="..."/>
                            <div className="card-body ">
                            <p className="card-text">Full Stack Development Program</p>
                            <Link to={"/Fullstack"} className="btn btn-primary">View</Link>
                            </div>
                         </div>
                     <div className="card col-3">
                           <img src="/images/data-science.jpg" className="card-img-top" alt="..."/>
                           <div className="card-body" >
                           <p className="card-text">Data Science Program</p>
                           <Link to={"/Datascience"} className="btn btn-primary">View</Link>
                           </div>
                     </div>
                     <div className="card col-3">
                           <img src="/images/cybersecurity.jpg" className="card-img-top" alt="..."/>
                           <div className="card-body" >
                           <p className="card-text">Cybersecurity</p>
                           <Link to={"/Cybersecurity"} className="btn btn-primary">View</Link>
                           </div>
                     </div>
                                                           
                                                           
                                                                                
                    </div>
                                                                                


            </div>
            </div>
    )
}