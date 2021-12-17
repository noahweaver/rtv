import React, {useContext} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Auth from './pages/Auth'
import Profile from './pages/Profile'
import Public from './pages/Public'
import { UserContext } from './context/UserProvider'

function App(){

  const {token, logout} = useContext(UserContext)

  return (
    <>
      <Navbar logout={logout}/>
      <Routes>
        <Route 
          exact path="/" 
          element={token ? <Navigate to="/profile" /> : <Auth />}
        />
        <Route 
          path="/profile"
          element={<Profile />}
        />
        <Route 
          path="/public"
          element={<Public />}
        />
      </Routes>
    </>
  )
}

export default App