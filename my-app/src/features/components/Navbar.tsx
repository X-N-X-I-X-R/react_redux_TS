import React from 'react';
import { Link } from 'react-router-dom';
import RealTime from './RealTime';
import '../../App.css';

function Navbar() {
    return (
        
        <nav className="navbar">
            <p className="link clock" ><RealTime ></RealTime></p>
            <Link to="/register" className="link register">Register</Link>
            <Link to="/login" className="link login">Login</Link>
        </nav>
    );
}

export default Navbar;