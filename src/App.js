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
function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route exact path="/" element= {<Home/>}>
          </Route>
          <Route path="/students" element={<Student/>}>
          </Route>
          <Route path="/assignment" element={<Assignment/>}>
          </Route>
          <Route path="/students/:studentId" element={<Studentdetails/>}>
          </Route>
          <Route path="/attendance" element={<Attendance/>}>
          </Route>
          <Route path="/attendance/:stdId" element={<Attendancegraph/>}>
          </Route>
          <Route path="/results" element={<Result/>}>
          </Route>
          <Route path="/results/:stdId" element={<Resultgraph/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
