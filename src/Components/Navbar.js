import React from 'react';
import '../styles/navbar.css';
const Navbar = () => {
    return (
        <div className='nav'>
            <ul className='navbar'>
                <li><a href='/'>Home</a></li>
                <li><a href='/contact'>ContactUs</a></li>
                <li><a href='/courses'>Courses</a></li>
                <li><a href='/login'>Login</a></li>
                <li><a href='/register'>Register</a></li>
            </ul>
        </div>
    );
};

export default Navbar;