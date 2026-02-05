import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import SearchIcon from '../Assets/search_icon.svg'
import bell_icon from '../Assets/bell_icon.svg'
import profile_img from '../Assets/profile_img.png'
import caret_img from '../Assets/caret_icon.svg'
import { logout } from '../firebase'
function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-left'>
            <img src={logo} alt='Netflix Logo' className='navbar-logo'/>
            <ul>
                <li>Home</li>
                <li>TV shows</li>
                <li>Movies</li>
                <li>News & popular</li>
                <li>My list </li>
                <li>Browse by languages</li>
            </ul>
        </div>
        <div className='navbar-right'>
            <img src={SearchIcon} alt='search' className='icons'/>   
            <p>children</p>
            <img src={bell_icon} alt='notifications' className='icons'/>
            <div className='navbar-profile'>
                <img src={profile_img} alt='profile' className='profile'/>
                <img src={caret_img} alt=''/>
                  <div className='dropdown'>
                    <p onClick={() => {logout()}}>sign out</p>
                  </div>
                </div>   
            </div>
        </div>
  
  )
}

export default Navbar
