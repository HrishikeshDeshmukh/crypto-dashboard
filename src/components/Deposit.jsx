import React from 'react'
import { TbMoneybag } from "react-icons/tb";

const Deposit = () => {
  return (
    <>
      <div className="card-wrapper">
        <div className="card-icon-wrap">
            <div className="card-icon-body color">
               <TbMoneybag className='card-icon'/>
            </div>
        </div>
        <div className='card-text-wrap'>
            <h4>Total Deposit</h4>
            <h2>$41,210</h2>

        </div>
      </div>
      
    </>
  )
}

export default Deposit
