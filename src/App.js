import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Aboutme from "./Aboutme";
import Projects from "./Projects";
import Contact from "./Contact";


export default function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
