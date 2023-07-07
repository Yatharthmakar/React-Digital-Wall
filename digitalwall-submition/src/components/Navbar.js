import logo from '../y9.jpg';
import React from 'react';
import {Link} from 'react-router-dom';


export default function Navbar(props) {
  return ( 
    <nav className="bg-grey py-4 flex justify-between">
    <Link to="/"><div className = "px-10 flex">
      <img src ={logo} className="logo" alt="Logo"/>
      <div className="pt-3 px-4 text-3xl">{props.heading}</div>
    </div></Link>
    <div className="flex">
      <div className="p-3">
        <input className="search-bar p-3" typre="search" placeholder="Search" />
      </div>
      <button className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-10 rounded" onClick={props.createNew}> 
      {props.buttonText}
      </button>
    </div>
  </nav>
  )
}
