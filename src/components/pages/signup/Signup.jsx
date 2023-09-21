import React, { useState } from 'react'
import u_icon from '../../assets/homepagee.png'
import p_icon from '../../assets/front page.png'
import { Link, useNavigate } from 'react-router-dom'
import "./Signup.css"
import { Person, Email, Lock } from '@mui/icons-material'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import {auth} from "../../Firebase"

export default function Signup() {

    const navigate= useNavigate();
    const [values,setValues]= useState({
        name:"",
        email:"",
        pass:"",
    });

    const[errorMsg, setErrorMsg] = useState("");

    const [submitButtonDisabled, setSubmitButtonDisabled]= useState(false);

    const handleSubmission=()=>{
        if(!values.name || !values.email || !values.pass){
            setErrorMsg("Fill all fields");
            return;
        }
        setErrorMsg("");
        console.log(values);
        setSubmitButtonDisabled(true)
        createUserWithEmailAndPassword(auth,values.email,values.pass)
        .then(async(res)=>{
            setSubmitButtonDisabled(false);
            const user=res.user;
            await updateProfile(user,{
                displayName: values.name,
            });
            navigate('/home');

        })
        .catch((err)=> {
            setSubmitButtonDisabled(false);
            setErrorMsg(err.message);
        });
    }

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
                <input type="text" placeholder='Name' 
                onChange={event=>setValues((prev)=>({...prev, name: event.target.value}))}/>
            </div>
            <div className='signupinput'>
                <Email className='signupinputicon'/>
                <input type="email" placeholder='Email-Id'
                onChange={event=>setValues((prev)=>({...prev, email: event.target.value}))}/>
            </div>
            <div className='signupinput'>
                <Lock className='signupinputicon'/>
                <input type="password" placeholder='Password'
                onChange={event=>setValues((prev)=>({...prev, pass: event.target.value}))}/>
            </div>
        </div>
        <b className='errormsg'>{errorMsg}</b>
        <div className='signupsubmit-container'>
            
            <div className="signupsubmit" onClick={handleSubmission} 
            disabled={submitButtonDisabled} >Signup</div>
            
        </div>
        <Link to="/">
            <div className='signuplogin'>Existing user? Login</div>
            </Link>
    </div>
    </div>
  )
}
