import React, { useState } from 'react'
import axios from 'axios'

const Register = (props) => {
    const [username, setEmail] = useState('')
    const [password, setPass] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username)
      }

      const getReg = () => {
        axios.post('/register', {username, name, password})
      }


  return (
    <div>
        <div className='auth'>
      
      <form onSubmit={handleSubmit}>
      <h1>Create Account</h1>
        <label htmlFor='name'>Full name</label>
        <input onChange={(e) => setName(e.target.value)} value={name} name='name' id='name' placeholder='full Name'></input>
        <label htmlFor="email">email</label>
        <input value={username} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='youremail@gmail.com' id='email' name='email'></input>
        <label htmlFor="password">password</label>
        <input value={password} onChange={(e) => setPass(e.target.value)} type='password' placeholder='********' id='password' name='password'></input>
        <button onClick={getReg} className='signbtn' type='submit'>Sign In</button>
        <button onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
      </form>
      
  </div>
    </div>
  )
}

export default Register