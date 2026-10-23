 import { BrowserRouter, Routes, Route } from "react-router";
 import welcome from "./Welcome"
 import viktoh from "./viktoh"
import Navbar from "./Components/Navbar";

import Home from "./pAGE/Home";

 export default function App(){
  return(
    <BrowserRouter>

    <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Viktoh" element={<viktoh/>}/>
       </Routes>
    </BrowserRouter>
  )
 }