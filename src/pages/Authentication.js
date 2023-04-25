import React, { useState } from 'react'

function Authentication() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email)
  }


  return (
    <div className='auth'>
      
        <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
          <label for="email">email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='youremail@gmail.com' id='email' name='email'></input>
          <label for="password">password</label>
          <input value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='********' id='password' name='password'></input>
          <button className='signbtn' type='submit'>Sign In</button>
        </form>
    </div>
  )
}

export default Authentication