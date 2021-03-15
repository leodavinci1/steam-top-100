import React from 'react';
import { Link } from 'react-router-dom';
import jsonData from '../../data/top100.json';

import './navbar.css';

const NavbarComponent = () => {
  const LastDate = jsonData[0].lastUpdated;
console.log(LastDate)
  
  return (
    <div className="navbar">
      <ul className="navbar--list">
        <li>Top 100 steam games</li>
        <li><a href="https://ko-fi.com/codingleo" target="_blank">Buy me a ☕</a></li>
        <li>{`updated at ${LastDate.split(" ")[1]} ${LastDate.split(" ")[2]} ${LastDate.split(" ")[0].split("-")[1]}/${LastDate.split(" ")[0].split("-")[2]}/${LastDate.split(" ")[0].split("-")[0]}`}<span className="status-green"></span></li>
      </ul>
    </div>
  );
}

export default NavbarComponent;
