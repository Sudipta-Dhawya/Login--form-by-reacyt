// import logo from './logo.svg';
// import './App.css';
import Form from "./Components/Form"
import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Navbar } from "./Screen/Navbar";
const App=()=>{
  return (
<BrowserRouter>

<Routes>

        <Route  path="/" element ={<Form/>} />
        <Route path="/Screen/Navbar" element={Navbar} />
   

<Route path ="/home" element={<div>Home</div>}/>
<Route path ="/database" element={<div>Database</div>}/>
<Route path ="/contact" element={<div>Contact</div>}/>
<Route  path="*" element={Form} />
</Routes>

    </BrowserRouter>
  )
}

export default App;
