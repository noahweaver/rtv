import React, { useState, useContext } from 'react'
import AuthForm from '../components/AuthForm'
import { UserContext } from '../context/UserProvider'


const initInputs = { username: "", password: "" }

function Auth(){
  const [inputs, setInputs] = useState(initInputs)
  const [toggle, setToggle] = useState(false)

  const {signup, login} = useContext(UserContext)

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSignup(e){
    console.log("handleSignup was called")
    e.preventDefault()
    signup(inputs)
  }

  function handleLogin(e){
    console.log("handleLogin was called")
    e.preventDefault()
    login(inputs)
  }

  return (
    <div>
      <h1>Rock The Vote</h1>
      { !toggle ?
        <>
          <AuthForm 
            handleChange={handleChange}
            handleSubmit={handleSignup}
            inputs={inputs}
            btnText="Sign up"
          />
          <p onClick={() => setToggle(prev => !prev)}>Already a member?</p>
        </>
      :
        <>
          <AuthForm 
            handleChange={handleChange}
            handleSubmit={handleLogin}
            inputs={inputs}
            btnText="Login"
          />
          <p onClick={() => setToggle(prev => !prev)}>Not a member?</p>
        </>
      }
    </div>
  )
}
export default Auth