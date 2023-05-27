import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
function App() {
  const [tokenNo, setToken] = useState("");
  let [userData, setUserData] = useState(JSON.parse(localStorage.getItem(tokenNo)) || {});
  useEffect(() => { }, [])
  return (
    <div>
      <Navbar userData={userData} />
      <Routes>
        <Route path='/profile' element={<Profile tokenNo={tokenNo} userData={userData} setUserData={setUserData} />} />

        <Route path='/' element={<Signup setToken={setToken} setUserData={setUserData} />} />



      </Routes>
    </div>
  )
}

export default App
