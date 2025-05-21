import './App.css'
import {Route, Routes} from 'react-router-dom'
import Navbar from './../src/components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Register from './pages/Register'
import Login from './pages/Login'
import axios from 'axios';
import {Toaster} from 'react-hot-toast';
import {UserContextProvider} from "../src/context/userContext.jsx";
import Dashboard from './pages/Dashboard.jsx'

axios.defaults.baseURL = 'https://mern-auth-1-9902.onrender.com';
axios.defaults.withCredentials = true
function App() {
  

  return (
    <>
    <UserContextProvider>

   
    {/* <Navbar /> */}
    <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/login' element={<Login/>} />

      <Route path='/register' element={<Register/>} />
      {/* <Route path='/home' element={<Home/>} /> */}
      <Route path='/dashboard' element={<Dashboard/>} />

    </Routes>
    </UserContextProvider>
     
    </>
  )
}

export default App
