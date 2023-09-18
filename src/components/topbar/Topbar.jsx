import React from 'react'
import "./Topbar.css"
import {Notifications, Language} from "@mui/icons-material";
import user_icon from "../assets/user_icon.png";
export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topleft'>
            <span className='logo'>Pragati</span>
        </div>
        <div className='topright'>
            <div className='topbarIconContainer'>
            <Notifications/>
            <span className='topIconBadge'>2</span>
            </div>
            <div className='topbarIconContainer'>
            <Language/>
            </div>
           <img src={user_icon} alt='' className='topavatar'></img>
        </div>
      </div>
    </div>
  )
}
