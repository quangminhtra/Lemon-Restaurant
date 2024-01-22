import React from 'react';
import logo from '../images/Logo .svg';
import { useState } from 'react';
const Nav = () => {
    const[menuOpen, setMenuOpen] = useState (false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    // Rest of the component code
    return (
        // JSX code for the Nav component
        <nav className={'navbar ${menuOpen ? "open" : ""}'}>

            <a href='/' className="logo">
                <img src={logo} alt-="logo" />
            </a>

            {/* mobile naviagtion */}
            <div className = "menu-icon" onclick={toggleMenu} > 
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>

            {/* nav items */}
            <ul className = {'nav-links ${menuOpen ? "visible": ""}'}>
<li>
    <a href='/'>Home</a>
</li>

<li>
    <a href='/'>About</a>
</li>

<li>
    <a href='/'>Services</a>
</li>

<li>
    <a href='/'> Reservation</a>
</li>

<li>
    <a href='/'> Order Online</a>
</li>

<li>
    <a href='/'> Login</a>
</li>
            </ul>

        </nav>
    );
    }
export default Nav;
