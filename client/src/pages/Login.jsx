import React, { useState } from 'react'
import "./Login.css"
// import  bg from "./loginbg.png"
const Login = () => {

  const[popupStyle,showPopup]=useState("hide")
  const popup=()=>{
    showPopup("login-popup")
    setTimeout(()=> showPopup("hide"),3000)
  }

  
  return (
    <div id='bg' style={{backgroundImage:`url()`}}>
      <div className='cover' >
    <h1>Login</h1>

            <input type="text" placeholder='userName' name="userName" />
          <input type="password" placeholder='password'/>
          <div className='login-btn' onClick={popup}>Login</div>
          <p className='text'>OR LOGIN USING </p>
          <div className='alt-login'>
            <div className='facebook'></div>
            <div className='google'>
            </div>
          </div>
        <div className={popupStyle}>
          {/* <h3>login sucessful</h3> */}
          
        </div>
  
</div></div>
   
    
  )
}

export default Login