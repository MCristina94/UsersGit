import React from 'react'
import LoginForm from '../Components/LoginForm'

const Login = ({login}) => {
  return (
    <div>
      <h1>Welcome!</h1>
      <LoginForm login={login}/>
    </div>
  )
}

export default Login

