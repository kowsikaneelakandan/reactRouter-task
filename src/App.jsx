import { Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Fullstack from "./pages/Fullstack";
import Datascience from "./pages/Datascience";
import Cybersecurity from "./pages/Cybersecurity";
import Navbar from "./compoents/Navbar";
import Contact from "./pages/Contact";


function App() {
  return(
    <>
    <Navbar />
    <Routes>
       <Route Component={Home} path="/"/>
       <Route Component={Fullstack} path="/Fullstack"/>
       <Route Component={Datascience} path="/Datascience"/>
       <Route Component={Cybersecurity} path="/Cybersecurity"/>
       <Route Component={Contact} path="/Contact"/>
    </Routes>
    
    
    
    
    
    </>
  )
  
}
export default App;