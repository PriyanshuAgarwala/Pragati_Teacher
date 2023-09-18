import React from 'react'
import "./Sidebar.css"
import { LineStyle, TrendingUp, Assignment, CalendarToday, CalendarMonth, PersonOutlined, DashboardOutlined, ChatBubbleOutlineOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Dashboard</h3>
                <ul className='sidebarList'>
                    <Link to="/" className='link'>
                   <li className='sidebarListItem'>
                    <DashboardOutlined/>
                    Dashboard
                   </li>
                   </Link>
                   
                </ul>
            </div>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Class Info</h3>
                <ul className='sidebarList'>
                    <Link to="/students" className='link'>
                   <li className='sidebarListItem'>
                    <PersonOutlined/>
                    Students
                   </li>
                   </Link>
                   <Link to="/assignment" className='link'>
                   <li className='sidebarListItem'>
                    <Assignment/>
                    Assignments
                   </li>
                   </Link>
                   <Link to="/timetable" className='link'>
                   <li className='sidebarListItem'>
                    <CalendarMonth/>
                    Time Table
                   </li>
                   </Link>
                   <Link to="/attendance" className='link'>
                   <li className='sidebarListItem'>
                    <LineStyle/>
                    Attendance
                   </li>
                   </Link>
                   <Link to="/eaxminations" className='link'>
                   <li className='sidebarListItem'>
                    <TrendingUp/>
                    Examinations
                   </li>
                   </Link>
                   <Link to="/results" className='link'>
                   <li className='sidebarListItem'>
                    <TrendingUp/>
                    Results
                   </li>
                  </Link>
                </ul>
            </div>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Add Ons</h3>
                <ul className='sidebarList'>
                <li className='sidebarListItem'>
                    <CalendarToday/>
                    Calendar
                   </li>
                </ul>
            </div>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Miscellaneous</h3>
                <ul className='sidebarList'>
                   <li className='sidebarListItem'>
                    <ChatBubbleOutlineOutlined/>
                    Student Feedback
                   </li>
                </ul>
            </div>
        </div>
    
    </div>
  )
}
