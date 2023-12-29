import React, {useState, useEffect} from 'react';

const Navbar = () => {
    return(
        <div className='navbar'>
            <img width="500px" height="500px" src="concert-compass/cc-main/src/assets/Untitled6_20231229000458.png"/>
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