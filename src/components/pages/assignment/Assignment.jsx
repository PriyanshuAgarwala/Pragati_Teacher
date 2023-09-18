import React from 'react'
import "./Assignment.css"


export default function Assignment() {
  return (
    <div className='assignments'>
      <table className='tablee'>
        <tr className='headings'>
            <td>Assignment Uploaded</td>
            <td>Assignment Submitted</td>
        </tr>
        <tr>
            <td className='content'>Unit 1</td>
            <td className='content'>Unit 1</td>
        </tr>
        <tr>
            <td className='content'>Unit 2</td>
            <td className='content'>Unit 2</td>
        </tr>
        <tr>
            <td className='content'>Unit 3</td>
            <td className='content'>Unit 3</td>
        </tr>
        <tr>
            <td className='content'>Unit 4</td>
            <td className='content'>Unit 4</td>
        </tr>
      </table>
    </div>
  )
}
