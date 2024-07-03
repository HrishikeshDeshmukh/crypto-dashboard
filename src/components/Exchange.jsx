import React from "react";
import { MdCurrencyExchange } from "react-icons/md";

const Exchange = () => {
  return (
    <>
      <div className="card-wrapper">
        <div className="card-icon-wrap">
          <div className="card-icon-body">
            <MdCurrencyExchange className="card-icon" />
          </div>
        </div>
        <div className="card-text-wrap">
          <h4>Total Exchange Price</h4>
          <h2>$41,210</h2>
        </div>
      </div>
    </>
  );
};

export default Exchange;
