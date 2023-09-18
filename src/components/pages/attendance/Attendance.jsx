import React from 'react'
import "./Attendance.css"
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { studentrows } from '../../assets/stdata';



export default function Attendance() {

    
  
  
  
     const columns = [
    { field: 'id', headerName: 'Roll Number', width: 130 },
    { field: 'Name', headerName: 'Full Name', width: 180 },
    
    { field: 'Class', headerName: 'Class', width: 90 ,sortable:false},
    { field: 'Sec', headerName: 'Section', sortable: false, width: 90},
    { field: 'attendance', headerName: 'Attendance', width: 140 },
    { field:'lastabsent', headerName: 'Last Absent', width:170},
    { field: 'action', headerName:'View Graph', width:'150', renderCell:(params)=>{
        return(
            <Link to={"/attendance/"+params.row.id}>
                <button className='viewgraph'>Graph</button>
            </Link>
        )
    }}
    
    
  ];
  

  return (
    <div className='attendance'>
      <DataGrid
        rows={studentrows}
        disableRowSelectionOnClick
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 7 },
          },
        }}
        pageSizeOptions={[7,8,9, 10]}
        checkboxSelection
      />
    </div>
  )
}
