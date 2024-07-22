import React from 'react'
import './CSS/LoginSignup.css'
import bg_video from '../Components/assets/video.mp4'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <video autoPlay loop muted playsInline className='back-video-login'>
          <source src={bg_video}/>
          </video>
      <div className="page">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
         <input type='text' placeholder='Your Name'/>
         <input type='email' placeholder='Email Address'/>
         <input type='password' placeholder='Password'/>
         <input type='password' placeholder='Confirm Password'/>
        </div>
        <div className="btn">
        <button>Continue</button>
        </div>
        <p className="loginsignup-login">
          Already have an account? <a href='Logins'>Login here</a>
        </p>
        <div className="loginsignup-agree">
          <input type='checkbox' name='' id='' />
          <p>By continuing, I agree to the terms and conditions.</p>
        </div>
      </div>
      </div>
    </div>
  )
}
export default LoginSignup;
