import React from 'react'
import DP from "../assets/images/avatar.png";
import DP2 from '../assets/images/avatar-2.png'


const Data = [
    {
        id : 1,
        img:DP2,
        name: "Matheus Ferrero",
        transaction_id : "xxxxxxx",
        amount: "+56.07",
    },

    {
        id : 2,
        img:DP,
        name: "Floyd Miles",
        transaction_id : "xxxxxxx",
        amount: "-$39.65",
    },

    {
        id : 3,
        img:DP,
        name: "Jerome Bell",
        transaction_id : "xxxxxxx",
        amount: "-$29.78",
    },

    {
        id : 4,
        img:DP2,
        name: "Ralph Edwards",
        transaction_id : "xxxxxxx",
        amount: "-$46.61",
    },
]

const RecentTransaction = () => {
  return (
    <>
     <div className="transaction-heading-wrapper">
              <h4>Recent Transaction</h4>
              <h5>See all</h5>
            </div>

            <div className="transaction-list">

                {Data.map((item)=>(

                
              <div className="list-item" id={item.id}>
                <div className="list-profile">
                  <div className="list-image-wrap">
                    <img src={item.img} alt="" />
                  </div>

                  <div className="transaction-information-wrap">
                    <h5>{item.transaction_id}</h5>
                    <h3>{item.name}</h3>
                  </div>
                </div>

                <div className="transaction-amt">
                  <h4>{item.amount}</h4>
                </div>
              </div>
               ))}
            </div>
      
    </>
  )
}

export default RecentTransaction
