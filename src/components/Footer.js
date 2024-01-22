import React from 'react';
import logo from '../images/small_logo.png';
const Footer = () => {
    return (
        <footer>
            <section>
            <div className ='company-info'>
            <img src={logo} alt=''/>
            <p> Come along and treat yourself to our new, 
                delicious Mediterranean and Middle-Eastern Cuisine. All made with fresh, local ingredients.</p>
             </div>
             <div> 
                <h3>  Important links</h3>
                <ul>
                    <li> <a href='#'> Home</a></li>
                    <li> <a href='#'> About</a></li>
                    <li> <a href='#'> Menu</a></li>
                    <li> <a href='#'> Reservation</a></li>
                    <li> <a href='#'> Order Online</a></li>
                    <li> <a href='#'> Login</a></li>
                </ul>
             </div>

             <div>
                <h3>  Contact Us</h3>
                <ul>
                    <li> <a href='#'> 1-800-1234-567</a></li>
                    <li> <a href='#'> 1234 Street Name, Chicago, US</a></li>
                    <li> <a href='#'> LemonR@lemonrestaurant.com</a></li>
                </ul>
             </div>

             <div>
                <h3>  Follow Us</h3>
                <ul>
                    <li> <a href='#'> Facebook</a></li>
                    <li> <a href='#'> Twitter</a></li>
                    <li> <a href='#'> Instagram</a></li>
                    <li> <a href='#'> Pinterest</a></li>
                    <li> <a href='#'> Youtube</a></li>
                </ul>
             </div>
            </section>
            
        </footer>
        
    );
};

export default Footer;
