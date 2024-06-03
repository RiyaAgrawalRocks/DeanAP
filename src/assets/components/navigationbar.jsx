import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    
    return (
        <div className="navbar-container">
            <ul className="navbar-list">
                <Link to={{pathname:'/'}}>
                    <li className="navbar-item">
                        Inward
                    </li>
                </Link>
                <Link to={{pathname:'/outward'}}>
                    <li className="navbar-item">
                        Outward
                    </li>
                </Link>
            </ul>
        </div>
    )
}