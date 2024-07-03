import React from 'react'
import { CiSearch, CiBellOn  } from "react-icons/ci";


const Header = () => {
  return (
    <>
    <div className='header-wrapper'>
        <div className='heading'>Dashboard</div>
        <div className='header-items'>


            <div className="search-bar-wrap">
                <input type="text" name='search' placeholder='Search...'/>
                <CiSearch className='icon' />
            </div>

            <div className="notification-bar">
              <span className='notification-no'>1</span>
              <CiBellOn className='icon-notification' />
            </div>

            <div className="profile-wrap">
              <img src="https://diffusionart.co/wp-content/uploads/2023/04/Character-Anime-Manga-NFT-Profile-Pictures3.png" alt="" />
               
            </div>


        </div>
    </div>
      
    </>
  )
}

export default Header
