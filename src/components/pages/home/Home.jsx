import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import slider_1 from "../../assets/image_slider22.png"

export default function Home() {
  return (
    <div className='home'>
       <div className='mainclasslist'>
            <img src={slider_1} alt='' className='sliderimages'></img>
      </div>
      <div className='mainlistofclass'>
        <div className='classlistheading'>Mrs. Swati's Classes</div>
        <div className='mainlist'>
        <Link to="/students">
        <div className='classeslist'>Class  9 A</div>
        </Link>
        <Link to="/students">
        <div className='classeslist'>Class  8 A</div>
        </Link>
        <Link to="/students">
        <div className='classeslist'>Class  8 B</div>
        </Link>
        <Link to="/students">
        <div className='classeslist'>Class  7 B</div>
        </Link>
        <Link to="/students">
        <div className='classeslist'>Class  6 C</div>
        </Link>
        <Link to="/students">
        <div className='classeslist'>Class  6 A</div>
        </Link>
        </div>
      </div>
    </div>
  )
}
