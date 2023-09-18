import React from 'react'
import "./Result.css"
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { studentrows } from '../../assets/stdata';

export default function Result() {

    
  
    const columns = [
        { field: 'id', headerName: 'Roll No.', width: 70 },
        { field: 'Name', headerName: 'Full Name', width: 170 },
        
        { field: 'Class', headerName: 'Class', width: 70 ,sortable:false},
        { field: 'Sec', headerName: 'Section', sortable: false, width: 70},
        { field: 'ut1', headerName: 'Unit Test 1', width: 95 },
        { field: 'ut2', headerName: 'Unit Test 2', width: 95 },
        { field: 'hf', headerName: 'Half Yearly', width: 95 },
        { field: 'ut3', headerName: 'Unit Test 3', width: 95 },
        { field: 'ut4', headerName: 'Unit Test 4', width: 95 },
        { field: 'fnl', headerName: 'Finals', width: 80 },
        
        { field: 'action', headerName:'View Graph', width:'100', renderCell:(params)=>{
            return(
                <Link to={"/results/"+params.row.id}>
                    <button className='viewgraph'>Graph</button>
                </Link>
            )
        }}
        
        
      ];
  return (
    <div className='result'>
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
