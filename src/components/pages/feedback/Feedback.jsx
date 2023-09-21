import React from 'react'
import "./Feedback.css"
import rating_image from "../../assets/rating.jpg"

import {Star, StarOutline, AccountCircle} from "@mui/icons-material"

export default function Feedback() {
  return (
    <div className='feedback'>
      <div className='hedaingfeedback'>Feedback</div>
      <div className='ratingfeedback'>
      <div className='overallrating'>Overall Rating</div>
      <div className='ratingvalue'>4.0</div>
      <img src={rating_image} alt='' className='ratingimage'></img>
      </div> 
      <div className='reviewsfeedback'>
        <div className='reviewsheading'>Reviews</div>
        <hr className='horizontalline'/>
        <table className='reviewtable'>
          <tr className='reviewrows'>
            <AccountCircle/>
            <Star/> <Star/> <Star/> <Star/> <StarOutline/>
            The teaching style is really good, would be better if more time is given to certain topics</tr>
            <tr className='reviewrows'>
            <AccountCircle/>
            <Star/> <Star/> <Star/> <Star/> <Star/>
            Topics are explained really well.</tr>
        </table>
        </div> 
    </div>
  )
}
