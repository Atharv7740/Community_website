import { Route, Routes } from "react-router-dom"
import Contact from "../components/Contact"
import About from "../components/About"
import Hero from "../components/Hero"



function Routers() {
    




  return (
    <Routes>
        <Route path="/" element={<Hero></Hero>}></Route>
        <Route path="/About" element={<About></About>}></Route>
       
        <Route path='/Contact' element={<Contact/>}></Route>

    </Routes>
  )
}

export default Routers