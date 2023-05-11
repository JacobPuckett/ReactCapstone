import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Login = (props) => {
    const [username, setEmail] = useState('')
    const [password, setPass] = useState('')
    const [token, setToken] = useState(null)
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(username)
    }

    const getLogin = () => {
      axios.post('/login', {username, password})
      .then((res) => {
        setToken(res.data)
        localStorage.setItem('token', res.data)
      })
      .catch((err) => {
        console.error(err)
      })
    }

    useEffect(() => {
      let savedToken = localStorage.getItem('token')
      if(savedToken) {
        setToken(savedToken)
      }
    })


    const logout = () => {
      localStorage.clear()
      window.location.reload(false)
    }





  return token ? (
    <div className='success'>
      <h2>you are login</h2>
      <button className='logout' onClick={logout}>Logout</button>
    </div>
  ) : (


        <div className='auth'>
      
      <form onSubmit={handleSubmit}>
      <h1>Sign In</h1>
        <label htmlFor="email">email</label>
        <input value={username} onChange={(e) => setEmail(e.target.value)} type='username' placeholder='myusername' id='email' name='email'></input>
        <label htmlFor="password">password</label>
        <input value={password} onChange={(e) => setPass(e.target.value)} type='password' placeholder='********' id='password' name='password'></input>
        <button onClick={getLogin} className='signbtn' type='submit'>Sign In</button>
        <button onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
      </form>
      
  </div>
 
  )
}

export default Login


