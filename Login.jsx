import React from 'react'
import './CSS/Login.css'
import bg_video from '../Components/assets/video.mp4'

export const Login = () => {
  return (
    <div className='loginsignup'>
      <video autoPlay loop muted playsInline className='back-video-login'>
          <source src={bg_video}/>
          </video>
      <div className="page">
      <div className="login-container">
        <h1>Login Here</h1>
        <div className="login-fields">
         <input type='email' placeholder='Email Address'/>
         <input type='password' placeholder='Password'/>
        </div>
        <div className="btn">
        <button>Continue</button>
        </div>
        <p className="loginsignup-login">
          Donot have an account? <a href='Login'>Signup here</a>
        </p>
      </div>
      </div>
    </div>
  )
}
export default Login;
