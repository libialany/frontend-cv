import {
  Routes,
  Route
} from "react-router-dom";
import CNavbar from "./components/CNavbar";
import Certificados from "./Pages/Certificados";
import About from "./Pages/About";
import Projects from "./Pages/Proyects";
import Home from "./Pages/Home";

function App() {
  return (
   <div>
    <CNavbar/>
    <div className='container p-4'>
        <Routes>
        <Route path="/" element={<Home/>} />       
          <Route path="/certificados" element={<Certificados/>} />
          <Route path="/proyectos/python" element={<Projects  type={"python"}    />} />
          <Route path="/proyectos/javascript" element={<Projects  type={"js"} />} />
          <Route path="/about" element={<About />} />          
        </Routes>
      </div>

   </div>
  );
}
export default App;
