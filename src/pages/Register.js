import React, { useState } from 'react'

const Register = (props) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
      }

  return (
    <div>
        <div className='auth'>
      
      <form onSubmit={handleSubmit}>
      <h1>Create Account</h1>
        <label htmlFor='name'>Full name</label>
        <input value={name} name='name' id='name' placeholder='full Name'></input>
        <label htmlFor="email">email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='youremail@gmail.com' id='email' name='email'></input>
        <label htmlFor="password">password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='********' id='password' name='password'></input>
        <button className='signbtn' type='submit'>Sign In</button>
        <button onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
      </form>
      
  </div>
    </div>
  )
}

export default Register