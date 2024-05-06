import { Routes,Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home/Home.jsx"
import Login from "./pages/Login/Login.jsx"
import Signup from "./pages/SignUp/Signup.jsx"
import { Toaster } from "react-hot-toast"



function App() {

  return (
    <div className='p-4 h-screen flex item-center justify-center'>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>
     </Routes>
    <Toaster/>
    </div>
  )
}

export default App;
