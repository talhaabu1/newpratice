import { Navbar } from 'flowbite-react';
import React from 'react';
import {  NavLink } from 'react-router-dom';

const AppBar = () => {
  return (
    <div>
      <Navbar
  fluid={true}
  rounded={true}
  style={{backgroundColor: '#EEEEEE', background: 'linear-gradient(0.25turn, #afb7bf, #EFEFEF)', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'}}
  
>
  <Navbar.Brand href="https://flowbite.com/">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1320/1320865.png"
      className="mr-3  w-10 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap  font-semibold dark:text-white" style={{fontSize: '23px'}}>
      FOOD <i className="fa-solid fa-arrow-trend-up"></i> ITEM
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <NavLink
      to="/home"
      className=' text-base   font-bold'
      style={({isActive}) => isActive ? {color: '#F66B0E'} : undefined}
    >
      HOME
    </NavLink>
    <NavLink
    to="/about"
    className=' text-base   font-bold'
    style={({isActive}) => isActive ? {color: '#F66B0E'} : undefined}
    >
     ABOUT
    </NavLink>
    <NavLink
    to="/contact"
    className=' text-base   font-bold'
    style={({isActive}) => isActive ? {color: '#F66B0E'} : undefined}
    >
      CONTACT
    </NavLink>
  </Navbar.Collapse>
</Navbar>
    </div>
  );
};

export default AppBar;