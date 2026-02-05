import React from 'react'
import './Login.css'
import netflix_logo from '../assets/logo.png'
import { useState } from 'react'
import { login, signup } from '../firebase.js'
function Login() { 
  const [signState,setSignState] = useState("Sign In")
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const user_auth = async (event) => {
  event.preventDefault();
    if(signState === "Sign In"){
      await login(email,password);
  }
else{
  await signup(name,email,password);
}}
  return (
    <div className='login'>
      <img src={netflix_logo} alt='netflix logo' className='login-logo'/>
      <div className='login-form'>
        <h1>{signState} </h1>
        <form>
          {signState === "Sign Up"?<input type='text' placeholder='your name' value={name} onChange={(e)=>{setName(e.target.value)}} />:<></>}
          
          <input type='email' placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <input type='password' placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
          <button className='login-btn' onClick={user_auth} type='submit'>{signState}</button>
          <div className='form-help'>
            <div className='remember'>
              <input type='checkbox' />
              <label>Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
 

        </form>
        <div className='form-switch'>
          {signState === "Sign In"?<p>New to Netflix ?<span onClick={()=> {setSignState("Sign Up")}}>Sign Up now</span></p>
          :<p>Already Have an Account ?<span onClick={()=>{setSignState("Sign In")}}>Sign In now</span></p>}
         
          
        </div>

      </div>
      
    </div>
  )
}

export default Login
