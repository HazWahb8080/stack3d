import React from 'react';
import "./style.scss";

function Header() {
  return (
    <ul className='header'>
        <li className='active hide-xs'>home</li>
        <li className='hide-xs'>work</li>
        <li>travel</li>
        <li>menu</li>
    </ul>
  )
}

export default Header