import React, {useContext} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Auth from './pages/Auth'
import Profile from './pages/Profile'
import Public from './pages/Public'
import ProtectedRoute from './components/ProtectedRoute'
import { UserContext } from './context/UserProvider'

function App(){

  const {token, logout} = useContext(UserContext)

  return (
    <div className="container m-auto w-100">
      {token && <Navbar logout={logout}/>}
      <Routes>
        <Route 
          exact path="/" 
          element={token ? <Navigate to='/profile/' /> : <Auth />}
        />
        {/* if navigating from public -> profile, user issues do not get passed*/}
        <Route element={<ProtectedRoute token={token} />} >
          <Route path="/profile" element={<Profile />}/>
        </Route>
        <Route element={<ProtectedRoute token={token} />} >
          <Route path="/public" element={<Public />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App