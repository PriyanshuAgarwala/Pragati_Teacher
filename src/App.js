import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./components/pages/home/Home";
import Student from "./components/pages/student/Student";
import "./App.css"
import{ BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Assignment from "./components/pages/assignment/Assignment";
import Studentdetails from "./components/pages/Studentdetails/Studentdetails";
import Attendance from "./components/pages/attendance/Attendance";
import Attendancegraph from "./components/pages/attendancegraph/Attendancegraph";
import Result from "./components/pages/result/Result"; 
import Resultgraph from "./components/pages/resultgraph/Resultgraph";
import React from "react"; 
import Loginpage from "./components/pages/login/Loginpage";
import Calendar from "./components/pages/calendar/Calendar";
import Teachertraining from "./components/pages/teachertraining/Teachertraining";
import Timetable from "./components/pages/timetable/Timetable";
import Feedback from "./components/pages/feedback/Feedback";
function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route exact path="/" element= {<Loginpage/>}>  
          </Route>
          <Route exact path="/home" element= {<Home/>}>  
          </Route>
          <Route path="/students" element={
          <>
          <Topbar/>
           <div className='conatinerhome'>
            <Sidebar/>
             <Student/>
             </div>
          </>}>
          </Route>
          <Route path="/assignment" element={
          <>
          <Topbar/>
           <div className='conatinerhome'>
            <Sidebar/>
            <Assignment/>
             </div>
          </>}>
          </Route>
          <Route path="/students/:studentId" element={
              <>
              <Topbar/>
               <div className='conatinerhome'>
                <Sidebar/>
                <Studentdetails/>
                 </div>
              </>}>
          </Route>
          <Route path="/attendance" element={
          <>
          <Topbar/>
           <div className='conatinerhome'>
            <Sidebar/>
            <Attendance/>
             </div>
         </>}>
          </Route>
          <Route path="/attendance/:stdId" element={
           <>
           <Topbar/>
            <div className='conatinerhome'>
             <Sidebar/>
             <Attendancegraph/>
              </div>
          </>}>
          </Route>
          <Route path="/results" element={
          <>
          <Topbar/>
           <div className='conatinerhome'>
            <Sidebar/>
            <Result/>
             </div>
         </>}>
          </Route>
          <Route path="/results/:stdId" element={
           <>
           <Topbar/>
            <div className='conatinerhome'>
             <Sidebar/>
             <Resultgraph/>
              </div>
          </>}>
          </Route>
          <Route path="/calendar" element={
           <>
           <Topbar/>
            <div className='conatinerhome'>
             <Sidebar/>
             <Calendar/>
              </div>
          </>}>
          </Route>
          <Route path="/teacherstraining" element={
           <>
           <Topbar/>
            <div className='conatinerhome'>
             <Sidebar/>
             <Teachertraining/>
              </div>
          </>}>
          </Route>
          <Route path="/timetable" element={
           <>
           <Topbar/>
            <div className='conatinerhome'>
             <Sidebar/>
             <Timetable/>
              </div>
          </>}>
          </Route>
          <Route path="/feedback" element={
           <>
           <Topbar/>
            <div className='conatinerhome'>
             <Sidebar/>
             <Feedback/>
              </div>
          </>}>
          </Route>
        </Routes>
      
    </Router>
    </>
  );
}

export default App;