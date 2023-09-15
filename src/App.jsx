
import Home from "./Components/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./Components/About"
import Project from "./Components/Project"
import Nav from "./Components/Nav"
import Contact from "./Components/Contact"
import CursorCircle from "./Components/CursorCircle"

const App = () => {
  
  return (
    <div>
     
     <BrowserRouter>
     <CursorCircle/>
     <Nav/>
        <Routes>
          <Route path="/" element ={<Home/>}></Route>
          <Route path="/about" element ={<About/>}></Route>
          <Route path="/contact" element = {<Contact/>}></Route>
          <Route path="/projects" element = {<Project/>}></Route>
        </Routes>
      </BrowserRouter>
  
    
    </div>
  )
}

export default App