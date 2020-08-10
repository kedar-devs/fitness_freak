import React from 'react'
import './../css/navigation.css';
import bar from './../css/myFunction.js';
import { Link } from 'react-router-dom';


function Navigation() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  navbar-dark nav-back">
                
                <Link className="navbar-brand nav-home" to="/home">Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link nav-prop" to="/menchoice">Man <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-prop" to="/womenchoice">Women</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-prop" to="/motivation" >Motivation</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default Navigation
