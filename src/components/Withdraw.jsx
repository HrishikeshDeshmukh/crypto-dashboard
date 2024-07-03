import React from 'react'
import { BiMoneyWithdraw } from "react-icons/bi";

const Withdraw = () => {
  return (
    <>
      <div className="card-wrapper">
        <div className="card-icon-wrap">
            <div className="card-icon-body">
               <BiMoneyWithdraw className='card-icon'/>
            </div>
        </div>
        <div className='card-text-wrap'>
            <h4>Total Withdraw</h4>
            <h2>$41,210</h2>

        </div>
      </div>
      
    </>
  )
}

export default Withdraw
