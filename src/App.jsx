import React from 'react'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import { Routes, Route } from 'react-router-dom'
import Player from './Pages/Player.jsx'
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from './firebase'; 

import { useEffect } from 'react'
function App() {
  const navigate = useNavigate();
  useEffect(()=>{
      onAuthStateChanged(auth,async(user)=>{
        if(user){
          console.log("Logged In")
          navigate('/');
      }else{
        console.log("Logged Out")
        navigate('/login');
      }
    })
  },[])
  return (
    <div>
     <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/player/:id' element={<Player/>}/>
     </Routes>
    </div>
  )
}

export default App
