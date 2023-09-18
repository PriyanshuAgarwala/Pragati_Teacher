import React from 'react'
import "./Student.css";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { studentrows } from '../../assets/stdata';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Student() {
     const [data,setData]= useState(studentrows);

     const handleDelete= (id) =>{
      setData(data.filter(item=>item.id!==id));
     };
  
  
  
     const columns = [
    { field: 'id', headerName: 'Roll Number', width: 130 },
    { field: 'Name', headerName: 'Full Name', width: 180 },
    
    { field: 'Class', headerName: 'Class', width: 90 ,sortable:false},
    { field: 'Sec', headerName: 'Section', sortable: false, width: 90},
    { field: 'email', headerName: 'Email', width: 140 },
    {field: 'num', headerName: 'Phone Number', width:120},
    {field: 'action', headerName:'Action', width:100, renderCell: (params)=> {
      return(
        <>
        <Link to={"/students/"+params.row.id}><button className='studentListEdit'>Edit</button></Link>
        
        <DeleteOutline className='studentListDelete' onClick={()=>handleDelete(params.row.id)}/>
        </>
      )
    }}
  ];
  
 
  
  return (
    <div className='studentslist'>
      <DataGrid
        rows={data}
        disableRowSelectionOnClick
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 7},
          },
        }}
        pageSizeOptions={[7,8,9, 10]}
        checkboxSelection
      />
    </div>
  )
}

