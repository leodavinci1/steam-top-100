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
        <li><button onClick={() => window.location.reload(true)}><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sync" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-sync fa-w-16 fa-2x"><path fill="currentColor" d="M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z" class=""></path></svg></button>{`updated at ${LastDate.split(" ")[1]} ${LastDate.split(" ")[2]} ${LastDate.split(" ")[0].split("-")[1]}/${LastDate.split(" ")[0].split("-")[2]}/${LastDate.split(" ")[0].split("-")[0]}`}<span className="status-green"></span></li>
      </ul>
    </div>
  );
}

export default NavbarComponent;
