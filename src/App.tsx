

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import News from "./pages/News.tsx";
import Documents from "./pages/Documents.tsx";
import Administration from "./pages/Aministration.tsx";
import Tourism from "./pages/Tourism.tsx";
import More from "./pages/More.tsx";
import Navbar from "./components/Navbar.tsx";
import Events from "./pages/Events.tsx";
import Faq from "./pages/Faq.tsx";
import Services from "./pages/Services.tsx";
import Opeinions from "./pages/Opinions.tsx";
import Contact from "./pages/Contact.tsx";
import './index.css';
import Footer from "./components/Footer.tsx";
// other routes
import Admin from "./Administration_Links/admin.tsx";
import DeputyHead from "./Administration_Links/DeputyHead.tsx";
import HeadOffice from "./Administration_Links/HeadOffice.tsx";
import VoicePresdant from "./Administration_Links/VoicePresdant.tsx";



function App() {


    return (
        <Router>
            <div>
             <a href="/" className="head--title"><h4>Ale Zone Government communication affairs Office</h4></a>
                   <hr className="custom-hr" />
                       </div>

            <Navbar/>
             <Routes>


                <Route path="/" Component={Home} />
                <Route path="/about" Component={About} />
                <Route path="/news" Component={News} />
                <Route path="/documents" Component={Documents} />
                <Route path="/administration" Component={Administration} />
                <Route path="/tourism" Component={Tourism} />
                <Route path="/more" Component={More} />
                <Route path="/Services" Component={Services} />
                <Route path="/events" Component={Events} />
                <Route path="/opeinions" Component={Opeinions} />
                <Route path="/faq" Component={Faq} />
                <Route path='/contact' Component={Contact} />

            {/*     */}


                     <Route path="/admin" element={<Admin />} />
                     <Route path="/deputyhead" element={<DeputyHead />} />
                     <Route path="/headoffice" element={<HeadOffice />} />
                     <Route path="/vicepresdant" element={<VoicePresdant/>} />

            </Routes>
            <Footer/>
        </Router>
    )
}

export default App;