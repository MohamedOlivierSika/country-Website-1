import React from 'react';
import '../styles/header.css';
import Hamburger from '../images/icons/menuThings/Menu.png'
import Facebook from '../images/icons/socialMedia/Facebook.png'
import Instagram from '../images/icons/socialMedia/Instagram.png'
import Twitter from '../images/icons/socialMedia/TwitterX.png'
import CountryList from './CountryList';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
function Header(background){
    const [menu, setMenu] = useState("hidden")
  
    function menuClick() {
        setMenu(menu === 'hidden' ? "display" : "hidden"); 
    }

return(<div  >
    <div className='headerElements'>
    <ul>
        <li  > <img onClick={() => {menuClick();}} className='menuIcon' src={Hamburger} alt='H'/></li>
        <li><Link to={'/'}><h3 className='websiteName'>Website Name</h3></Link></li>
        <li className='socialMedia'>   
            <img src={Facebook} alt='Facebook'/>
           <img src={Instagram} alt='Instagram'/>
           <img src={Twitter} alt='Twitter'/>

        </li>
        
    </ul>
    </div>
    <CountryList menu={menu} menuClick={menuClick}   />
</div>




)}

export default Header


