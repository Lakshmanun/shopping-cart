import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import {  FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className="links">
                <Link to={"/"}> Shop</Link>
                <Link to={"/cart"}> <FaShoppingCart /> </Link>


            </div>
        </div>
    )
}
