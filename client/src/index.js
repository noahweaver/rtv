import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router} from 'react-router-dom'
import App from './App'
import UserProvider from './context/UserProvider'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/StyleWeaver.css'
import './css/rtvStyles.css'

ReactDOM.render(
  <Router>
    <UserProvider>
      <App/>
    </UserProvider>
  </Router>, 
  document.getElementById('root')
)