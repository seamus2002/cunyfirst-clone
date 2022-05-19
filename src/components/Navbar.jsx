import React from 'react';
import { NavLink } from "react-router-dom";
import cunyLogo from "../images/cuny-logo.png";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#1D3A83'}}>
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/"><img src={cunyLogo} alt="cuny-logo" className="navbar-logo d-inline-block align-text-top" /></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact to='/' className="nav-link">Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink exact to='/courses' className="nav-link">Courses</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink exact to='/instructors' className="nav-link">Instructors</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
