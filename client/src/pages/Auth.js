import React, { useState, useContext } from 'react'
import AuthForm from '../components/AuthForm'
import { UserContext } from '../context/UserProvider'
import Button from 'react-bootstrap/Button'



const initInputs = { username: "", password: "" }

function Auth(){
  const [inputs, setInputs] = useState(initInputs)
  const [toggle, setToggle] = useState(false)

  const {signup, login, errMsg, resetAuthErr} = useContext(UserContext)

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSignup(e){
    e.preventDefault()
    signup(inputs)
  }

  function handleLogin(e){
    e.preventDefault()
    login(inputs)
  }

  function toggleForm(){
    setToggle(prev => !prev)
    resetAuthErr()
  }

  return (
    <div style={{ marginTop: "10%", border: "solid black 2px", borderRadius: 4 }}
    className="w-50 mx-auto p-5">
      <h1>Rock The Vote</h1>
      { !toggle ?
        <>
          <AuthForm 
            handleChange={handleChange}
            handleSubmit={handleSignup}
            inputs={inputs}
            btnText="Sign up"
            errMsg={errMsg}
          />
          <Button onClick={toggleForm}>Already a member?</Button>
        </>
      :
        <>
          <AuthForm 
            handleChange={handleChange}
            handleSubmit={handleLogin}
            inputs={inputs}
            btnText="Login"
            errMsg={errMsg}
          />
          <Button onClick={toggleForm}>Not a member?</Button>
        </>
      }

      {/* error messages display */}

      
    </div>
  )
}
export default Auth