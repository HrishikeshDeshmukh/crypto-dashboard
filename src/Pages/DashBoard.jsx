import React from "react";
import { useState } from "react";
import Deposit from "../components/Deposit";
import Withdraw from "../components/Withdraw";
import Exchange from "../components/Exchange";
import Assets from "../components/Assets";
import TotalMembers from "../components/TotalMembers";
import RecentTransaction from "../components/RecentTransaction";
import MarketTrend from "../components/MarketTrend";
import { TbMoneybag } from "react-icons/tb";
import DollarUp from "../assets/images/dollar-up.png";
import ProfitChart from "../components/ProfitChart";
import { LuBitcoin } from "react-icons/lu";
import GraphChart from "../components/GraphChart";

const DashBoard = () => {
  return (
    <>
      <div className="dashboard-wrapper">
        <div className="cards-section-wrapper">
          <Deposit />
          <Withdraw />
          <Exchange />
          <TotalMembers />
        </div>

        <div className="graph-transaction-wrapper">
          <div className="graph-wrapper">
            <div className="graph-heading-section">
              <div className="graph-heading">
                <h4>Market Overview</h4>
              </div>
              {/* <div className="graph-option-section">
                <h6 className="buyers">
                  <span></span>Buyers
                </h6>
                <h6 className="sellers">
                  <span></span>Sellers
                </h6>

                <div className="dropdown">
                  <button className="dropbtn">Dropdown</button>
                   <div className="dropdown-content">
                      <h6>Yearly</h6>
                     <h6>Quaterly</h6>
                     <h6>Monthly</h6>
                     <h6>Weekly</h6>
                     <h6>Daily</h6> 

                  </div> 
                </div>
              </div> */}
              <GraphChart />
            </div>
          </div>

          <div className="recent-transaction-wrapper">
            <RecentTransaction />
          </div>
        </div>

        <div className="main-chart-wrapper">
          <MarketTrend />

          <div className="profit-wrap">
            <ProfitChart />
          </div>

          <Assets />
         
        </div>
      </div>
    </>
  );
};

export default DashBoard;
