import React from 'react'
import u_icon from '../../assets/homepagee.png'
import p_icon from '../../assets/front page.png'
import { Link } from 'react-router-dom'
import "./Signup.css"
import { Person, Email, Lock } from '@mui/icons-material'

export default function Signup() {
  return (
    <div className='signuphomepage'>
      <div className='signupwelcome'>Welcome to 
     <div className='signuptextlw'>  Pragati!</div>
     </div> 
    <img src={p_icon} alt='' className='signuptopimage'></img>
    <img src={u_icon} alt='' className='signupbottomimage'></img>

    <div className='signupcontainerlogin'>
        <div className='signupheader'>
            <div className='signuptext'>Signup</div>
            <div className='signupunderline'></div>
        </div>
        <div className='signupinputs'>
        <div className='signupinput'>
                <Person className='signupinputicon'/>
                <input type="text" placeholder='Name'/>
            </div>
            <div className='signupinput'>
                <Email className='signupinputicon'/>
                <input type="email" placeholder='Email-Id'/>
            </div>
            <div className='signupinput'>
                <Lock className='signupinputicon'/>
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        <div className='signupsubmit-container'>
            <Link to="/home">
            <div className="signupsubmit" >Signup</div>
            </Link> 
        </div>
        <Link to="/">
            <div className='signuplogin'>Existing user? Login</div>
            </Link>
    </div>
    </div>
  )
}
