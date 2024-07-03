import React from "react";
import ArrowUp from "../assets/images/line-up.png";
import ArrowDown from "../assets/images/line-down.png";
import DollarUp from "../assets/images/dollar-up.png";
import DollarDown from "../assets/images/dollar-down.png";

const ProfitData = [
  {
    id: 1,
    money: 1892.09,
    arrow: ArrowUp,
    sign: DollarUp,
    gain: "Income",
  },

  {
    id: 2,
    money: 192.09,
    arrow: ArrowDown,
    sign: DollarDown,
    gain: "Expenses",
  },

  {
    id: 3,
    money: 182,
    arrow: ArrowUp,
    sign: DollarUp,
    gain: "Income",
  },

  {
    id: 4,
    money: 892.09,
    arrow: ArrowDown,
    sign: DollarDown,
    gain: "Expenses",
  },
];

const ProfitChart = () => {
  return (
    <>
      <div className="chart-heading">
        <h4>Profit</h4>
      </div>

      <div className="profit-list-wrap">
        {ProfitData.map((item) => (
          <div className="profit-list-item" id={item.id}>
            <div className="card-icon-wrap">
              <div className="card-icon-body">
                <img src={item.arrow} alt="" />
              </div>
            </div>
            <div className="card-text-wrap profit-head">
              <h2>
                <span>
                  <img src={item.sign} alt="" />
                </span>
                {item.money}
              </h2>
              <h4>{item.gain}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProfitChart;
