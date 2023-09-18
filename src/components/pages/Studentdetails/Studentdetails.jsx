import React from 'react'
import "./Studentdetail.css"
import user_icon from "../../assets/user_icon.png";

export default function Studentdetails() {
  return (
    <div className='studentdetails'>
      <div className='studentTitleConatiner'>
        <h1 className='studentTitle'>Edit Student Details</h1>
        <button className='addstudent'>Create</button>
      </div>
      <div className='studentContainer'>
        <div className='studentshow'>
            <div className='studentshowtop'>
            <img src={user_icon} alt='' className='studentshowimage'></img>
            <div className='studentshowtoptitle'>
                <span className='studentshowstudentname'>Dhruv Agarwal</span>
                <span className='studentshowstudenttitle'>9 A</span>
            </div>
            </div>
            <div className='studentshowbottom'>
            <span className='studentshowTitle'>Details</span>
            <div className='studentinfoshow'>
            <span className='studentshowfield'>Parents Name: </span>
            <span className='studentshowvalue'>Rajeev Agarwal</span>
            </div>
            <div className='studentinfoshow'>
            <span className='studentshowfield'>Date of Birth: </span>
            <span className='studentshowvalue'>22-01-2009</span>
            </div>
            <div className='studentinfoshow'>
            <span className='studentshowfield'>Parents Conatct: </span>
            <span className='studentshowvalue'>8016872737</span>
            </div>
            <div className='studentinfoshow'>
            <span className='studentshowfield'>Address: </span>
            <span className='studentshowvalue'>Bengaluru</span>
            </div>
            </div>
        </div>
        <div className='studentupdate'>
            <span className='studentupdatetitle'>Edit</span>
            <form className='updateform'>
                <div className='updateleft'>
                    <div className='updateitem'>
                        <label></label>
                    </div>
                </div>
                <div className='updateright'></div>
            </form>
        </div>
      </div>
    </div>
  )
}
