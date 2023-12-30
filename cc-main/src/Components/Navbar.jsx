import React, {useState, useEffect} from 'react';

const Navbar = () => {
    return(
        <div className='navbar'>
            <img width="100px" height="100px" src="/src/assets/icons8-concert-day-100.png"/>
            <h2>Concert Compass</h2> 
            <ul className='dash-list'>
                <li>Home 🏠</li>
                <li>Search  🔍 </li>
                <li>About ℹ️ </li>
            </ul>
        </div>
    )
}

export default Navbar;