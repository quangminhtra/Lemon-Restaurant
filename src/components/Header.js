import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../images/restauranfood.jpg';


const Header = () => {
    return (
        <header className ="header">
            <section>
                {/*banner text*/}
                <div className ="banner">
                    <h2> Little Lemon</h2>
                    <h3> Chicago</h3>
                   
                 <p> Come along and treat yourself to our new, delicious Mediterranean and Middle-Eastern Cuisine. All made with fresh, local ingredients.</p>
                 <Link to="/booking"> <button aria-label='On Click'>Reserve Table </button></Link>
                </div>
                { /*banner image*/}
                
                <div className='banner-img'>
                <img src={bannerImg} alt="bannerImg" />"    
                 </div>
            </section>
        
        </header>
    );
    }

    export default Header;