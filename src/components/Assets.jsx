import React from "react";
import { LuBitcoin } from "react-icons/lu";
import { FaEthereum } from "react-icons/fa";
import { SiDogecoin } from "react-icons/si";
import { SiBinance } from "react-icons/si";

const Coins = [
  {
    id: 1,
    name: "Bitcoin",
    short_name: "BTC",
    icon: <LuBitcoin />,
    quantity: 0.14,
    price: 4455.2,
  },
  {
    id: 2,
    name: "Ethereum",
    short_name: "ETC",
    icon: <FaEthereum />,
    quantity: 0.14,
    price: 445.2,
  },
  {
    id: 3,
    name: "Dogecoin",
    short_name: "DOG",
    icon: <SiDogecoin />,
    quantity: 0.14,
    price: 445.2,
  },

  {
    id: 4,
    name: "Binance",
    short_name: "BNB",
    icon: <SiBinance />,
    quantity: 0.14,
    price: 445,
  },
];

const Assets = () => {
  return (
    <>
      <div className="assets-wrapper">
            <div className="transaction-heading-wrapper">
              <h4>Assets</h4>
            </div>

            {Coins.map((item) => (
                 <div className="list-item assets" id={item.id}>
                 <div className="list-profile">
                   <div className="list-image-wrap">
                     {item.icon} 
                   </div>
   
                   <div className="assets-information">
                     <h5>{item.name}</h5>
                     <h5>{item.short_name}</h5>
                   </div>
                 </div>
   
                 <div className="assets-amt">
                   <h5>{item.quantity}</h5>
                   <h4>${item.price}</h4>
                 </div>
               </div>
            ))}

           
          </div>
    </>
  );
};

export default Assets;
