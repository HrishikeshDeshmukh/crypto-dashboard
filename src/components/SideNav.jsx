import React, { useState, useEffect } from "react";

import Logo from "../assets/images/Logo.png";
import { MdSpaceDashboard } from "react-icons/md";
import { GoPeople, GoGraph } from "react-icons/go";
import { GrTransaction } from "react-icons/gr";
import { TbMoneybag } from "react-icons/tb";

import { BiMoneyWithdraw } from "react-icons/bi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import {
  FaAngleDown,
  FaAngleUp,
  FaAngleRight,
  FaAngleLeft,
} from "react-icons/fa";
import { SlEnvolopeLetter } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";

const SideNav = () => {

  const [deposit, setdeposit] = useState(false);
  const [withdraw, setWithdraw] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      setWithdraw(false);
      setdeposit(false)
    }
  }, [open]);
  

  return (
    <>
      <div className={open ? "active nav-wrapper" : "nav-wrapper"}>
        <div className="logo-wrapper">
          <img src={Logo} alt="" width={34} height={34} />
          <h2 className={open ? "active" : ""}>LOGO</h2>
        </div>

        <div className="mob-view-menu" onClick={() => setOpen(!open)}>
         {open ? <FaAngleLeft/> : <FaAngleRight />}  
        </div>

        <div className="nav-menu">
          <ul>
            <li className="nav-item">
              {" "}
              <MdSpaceDashboard className="nav-icon" />{" "}
              <h5 className={open ? "active" : ""}>Dashboard</h5>
            </li>
            <li className="nav-item">
              <GoPeople className="nav-icon" />{" "}
              <h5 className={open ? "active" : ""}>No. of Buyers</h5>{" "}
            </li>
            <li className="nav-item">
              <GoPeople className="nav-icon" />{" "}
              <h5 className={open ? "active" : ""}>No. of Seller</h5>
            </li>
            <li className="nav-item">
              <TbMoneybag className="nav-icon" />{" "}
              <h5 className={open ? "active" : ""}>Deposit</h5>{" "}
              {deposit ? (
                <FaAngleUp
                  className={open ? "active down-icon" : "down-icon"}
                  onClick={() => setdeposit(!deposit)}
                />
              ) : (
                <FaAngleDown
                  className={open ? "active down-icon" : "down-icon"}
                  onClick={() => setdeposit(!deposit)}
                />
              )}
            </li>

            {/* dropdown menu  */}
            {deposit && (
              <>
                <li className="nav-item-dropdown">Option 1</li>
                <li className="nav-item-dropdown">Option 2</li>
              </>
            )}

            <li className="nav-item">
              <BiMoneyWithdraw className="nav-icon" />
              <h5 className={open ? "active" : ""}> Withdraw </h5>
              {withdraw ? (
                <FaAngleUp
                  className={open ? "active down-icon" : "down-icon"}
                  onClick={() => setWithdraw(!withdraw)}
                />
              ) : (
                <FaAngleDown
                  className={open ? "active down-icon" : "down-icon"}
                  onClick={() => setWithdraw(!withdraw)}
                />
              )}
            </li>

            {/* dropdown menu  */}
            {withdraw && (
              <>
                <li className="nav-item-dropdown">Option 1</li>
                <li className="nav-item-dropdown">Option 2</li>
              </>
            )}

            <li className="nav-item">
              <FaMoneyBillTransfer className="nav-icon" />
              <h5 className={open ? "active" : ""}>Transaction</h5>
            </li>
            <li className="nav-item">
              <GoGraph className="nav-icon" />
              <h5 className={open ? "active" : ""}>Reports</h5>
            </li>
            <li className="nav-item">
              <SlEnvolopeLetter className="nav-icon" />{" "}
              <h5 className={open ? "active" : ""}>Message</h5>
            </li>
            <li className="nav-item">
              <IoSettingsOutline className="nav-icon" />
              <h5 className={open ? "active" : ""}>Setting</h5>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideNav;
