import React from 'react'
import "./Attendancegraph.css"
import { ResponsiveContainer, LineChart, Line , XAxis, YAxis, Tooltip} from 'recharts'
import {Array} from "../../assets/stdata"

export default function Attendancegraph() {
  return (
    <div className='attendancegraph'>
      <div className='attendanceTitleConatiner'>
        <h1 className='attendanceTitle'>Attendance Graph</h1>
      </div>
      <div className='attgraph'>
        <ResponsiveContainer  aspect={3} >
            <LineChart data={Array}  >
                <XAxis dataKey="Month"/>
                <YAxis dataKey="Attendance"/>
                <Tooltip/>
                <Line dataKey="Attendance" stroke='red' ></Line>
            </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
