import React from 'react';
import { Link } from 'react-router-dom';
import './../css/womenc.css';
import './../css/womenstuff.css';
function Womenc() {
    return (
        <div className="filter">
            <Link to="/womenarm">
            <div className="armw text-center">
                <div className="filter">
                arm
                </div>
            
            </div>
            </Link>
            <br /><br />
            <Link to='/womenbelly'>
            <div className="bellyw text-center">
                
                <div className="filter">
                belly
                </div>
                
            </div>
            <br /><br />
            </Link>
            <Link to="/womenb">
            <div className="buttw">
                
                <div className="filter">
                butt
                </div>
            </div>
            </Link>
            <br /><br />
            <Link to="/womenthigh">
            <div className="thighw">
                
                <div className="filter">
                thigh
                </div>
                
            </div>
            </Link>
            
        </div>

    )
}

export default Womenc
