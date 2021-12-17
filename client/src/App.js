import React, {useContext} from 'react'
import { Routes, Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar.'
import Auth from './pages/Auth.'
import Profile from './pages/Profile.'
import Public from './pages/Public.'
import Footer from './components/Footer'
import { UserContext } from './context/UserProvider'

function App(){

  const {token, logout} = useContext(UserContext)

  return (
    <>
      <Navbar logout={logout}/>
      <Routes>
        <Route 
          exact path="/" 
          render={()=> token ? <Redirect to="/profile" /> : <Auth />}
        />
        <Route 
          path="/profile"
          render={() => <Profile />}
        />
        <Route 
          path="/public"
          render={() => <Public />}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App