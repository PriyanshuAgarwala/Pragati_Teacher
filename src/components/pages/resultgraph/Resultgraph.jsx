import React from 'react'
import "./Resultgraph.css"
import {  ComposedChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend} from 'recharts'
import {Res} from "../../assets/stdata"


export default function Resultgraph() {
  return (
    <div className='resultgraph'>
      <div className='resultTitleConatiner'>
        <h1 className='resultTitle'>Result Graph</h1>
      </div>
      <div className='resgraph'>
      <ComposedChart layout="vertical" width={800} height={500} data={Res} margin={{top: 20,right: 20,bottom: 20,left: 20}}>
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" scale="band" />
      <Tooltip />
      <Legend />
      
      <Bar dataKey="Percentage" barSize={20} fill="#413ea0" />
      
    </ComposedChart>
      </div>
    </div>
  )
}
