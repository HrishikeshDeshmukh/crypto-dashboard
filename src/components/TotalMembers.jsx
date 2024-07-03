import React from 'react'
import { GoPeople } from "react-icons/go";

const TotalMembers = () => {
  return (
    <>
    <div className="card-wrapper">
        <div className="card-icon-wrap">
            <div className="card-icon-body">
               <GoPeople className='card-icon'/>
            </div>
        </div>
        <div className='card-text-wrap'>
            <h4>Total Members</h4>
            <h2>150</h2>

        </div>
      </div>
      
    </>
  )
}

export default TotalMembers
