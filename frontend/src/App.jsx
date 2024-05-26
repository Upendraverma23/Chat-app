import { Routes,Route, Navigate } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home/Home.jsx"
import Login from "./pages/Login/Login.jsx"
import Signup from "./pages/SignUp/Signup.jsx"
import { Toaster } from "react-hot-toast"
import { useAuthContext } from "./context/AuthContext.jsx"



function App() {

  const { authUser } = useAuthContext();

  return (
    <div className='p-4 h-screen flex item-center justify-center'>
     <Routes>
      <Route path="/" element={authUser ? <Home/> : <Navigate to={"/login"} />}/>
      <Route path="/Login" element={authUser ? <Navigate to= '/' /> :<Login/>}/>
      <Route path="/Signup" element={authUser ? <Navigate to='/' /> : <Signup/>}/>
     </Routes>
    <Toaster/>
    </div>
  )
}

export default App;
