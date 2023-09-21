import React from 'react'
import "./Loginpage.css"
import u_icon from '../../assets/homepagee.png'
import p_icon from '../../assets/front page.png'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import { Link } from 'react-router-dom'

export default function Loginpage() {
  return (
    <div className='loginhomepage'>
     <div className='loginwelcome'>Welcome to 
     <div className='logintextlw'>  Pragati!</div>
     </div> 
    <img src={p_icon} alt='' className='logintopimage'></img>
    <img src={u_icon} alt='' className='loginbottomimage'></img>

    <div className='logincontainerlogin'>
        <div className='loginheader'>
            <div className='logintext'>Login</div>
            <div className='loginunderline'></div>
        </div>
        <div className='logininputs'>
            <div className='logininput'>
                <img src={email_icon} alt=""/>
                <input type="email" placeholder='Email-Id'/>
            </div>
            <div className='logininput'>
                <img src={password_icon} alt=""/>
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        <div className='loginsubmit-container'>
            <Link to="/home">
            <div className="loginsubmit" >Login</div>
            </Link>
            
        </div>
    </div>
      
    </div>
  )
}