import React from "react";
import ArrowUp from '../assets/images/arrow.png'
import ArrowDown from '../assets/images/arro.png'


const TrendData = [
    {
        id: 1,
        shortname: 'BTC',
        name: 'Bitcoin',
        price:8594,
        last_price:2540,
        img:ArrowUp
    },

    {
        id: 2,
        shortname: 'BNB',
        name: 'Binance',
        price:57207,
        last_price:2340,
        img:ArrowDown
    },

    {
        id: 3,
        shortname: 'ETH',
        name: 'Etherium',
        price:71107,
        last_price:1340,
        img:ArrowDown
    },

    {
        id: 4,
        shortname: 'LTC',
        name: 'Litecoin',
        price:71107,
        last_price:1340,
        img:ArrowUp
    },

    {
        id: 5,
        shortname: 'LTC',
        name: 'Litecoin',
        price:71107,
        last_price:1340,
        img:ArrowUp
    },

    {
        id: 6,
        shortname: 'LTC',
        name: 'Litecoin',
        price:71107,
        last_price:1340,
        img:ArrowUp
    }

   
]

const MarketTrend = () => {
  return (
    <>
      <div className="trend-chart-wrap">
        <div className="chart-heading">
          <h4>Market Trend</h4>
        </div>

        <div className="chart-subheading">
          <h5>Name</h5>
          <h5 className="margin-30">24h Change</h5>
          <h5>Last Price</h5>
        </div>

        {
            TrendData.map((item) => (
         <div className="chart-item" id={item.id}>
           <h4>
            <span>{item.shortname}</span>{item.name}
          </h4>
          <h6>{item.price}</h6>
          <div className="price">
            <span>{item.last_price}</span> <img src={item.img} alt="" />
          </div>
        </div>
      
            ))
        }
    </div>
       
    </>
  );
};

export default MarketTrend;
