import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router} from 'react-router-dom'
import App from './App.js'
import UserProvider from './context/UserProvider'
import 'bootstrap/dist/css/bootstrap.min.css';
import '.css/StyleWeaver.css'
import './css/styles.css'

ReactDOM.render(
  <Router>
    <UserProvider>
      <App/>
    </UserProvider>
  </Router>, 
  document.getElementById('root')
)