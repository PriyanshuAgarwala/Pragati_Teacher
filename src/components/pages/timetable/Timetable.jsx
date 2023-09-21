import React from 'react'
import "./Timetable.css"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction"

export default function Timetable() {
  
  const event=[
    {title: "Kinematics- 9A" , start:" 2023-09-22", end:"2023-09-22"},
    {title: "Class Test- 8A" , start:" 2023-09-20", end:"2023-09-20"},
    {title: "Assignment- 7B" , start:" 2023-09-20", end:"2023-09-20"},
    {title: "Assignment- 6A" , start:" 2023-09-21", end:"2023-09-21"},
    {title: "Light- 8B" , start:" 2023-09-11", end:"2023-09-11"},
  ];
  return (
    <div className='timetable'>
      <FullCalendar 
        plugins={[ dayGridPlugin,timeGridPlugin, interactionPlugin ]}
         headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth, timeGridWeek, timeGridDay",
         }}
         events={event}
      />
    </div>
  )

}
