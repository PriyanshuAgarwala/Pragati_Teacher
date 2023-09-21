import React from 'react'
import "./Loginpage.css"
import u_icon from '../../assets/homepagee.png'
import p_icon from '../../assets/front page.png'
import { Link ,useNavigate} from 'react-router-dom'
import { Email, Lock } from '@mui/icons-material'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import {auth} from "../../Firebase"

export default function Loginpage() {

    const navigate= useNavigate();
    const [values,setValues]= useState({
        email:"",
        pass:"",
    });

    const[errorMsg, setErrorMsg] = useState("");

    const [submitButtonDisabled, setSubmitButtonDisabled]= useState(false);

    const handleSubmission=()=>{
        if(!values.email || !values.pass){
            setErrorMsg("Fill all fields");
            return;
        }
        setErrorMsg("");
        console.log(values);
        setSubmitButtonDisabled(true)
        signInWithEmailAndPassword(auth,values.email,values.pass)
        .then(async(res)=>{
            setSubmitButtonDisabled(false);
            navigate('/home');

        })
        .catch((err)=> {
            setSubmitButtonDisabled(false);
            setErrorMsg(err.message);
        });
    }

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
                <Email className='logininputicon'/>
                <input type="email" placeholder='Email-Id'
                onChange={event=>setValues((prev)=>({...prev, email: event.target.value}))}/>
            </div>
            <div className='logininput'>
                <Lock className='logininputicon'/>
                <input type="password" placeholder='Password'
                onChange={event=>setValues((prev)=>({...prev, pass: event.target.value}))}/>
            </div>
        </div>
        <b className='errormsg'>{errorMsg}</b>
        <div className='loginsubmit-container'>
            
            <div className="loginsubmit" onClick={handleSubmission} 
            disabled={submitButtonDisabled}>Login</div>
           
        </div>
        <Link to="/signup">
            <div className='loginsignup'>New user? Signup</div>
            </Link>
    </div>
      
    </div>
  )
}