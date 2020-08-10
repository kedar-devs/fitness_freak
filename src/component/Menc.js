import React from 'react';
import { Link } from 'react-router-dom';
import './../css/menc.css';
import './../css/displaystuff.css'
function Menc() {
    return (
        <div className="filter">
            <Link to="/menchest">
            <div className="chest text-center">
                <div className="filter">
                chest
                </div>
            
            </div>
            </Link>
            <br /><br />
            <Link to='/menshoulder'>
            <div className="arm text-center">
                
                <div className="filter">
                arms
                </div>
                
            </div>
            <br /><br />
            </Link>
            <Link to="/menabs">
            <div className="abs">
                
                <div className="filter">
                abs
                </div>
            </div>
            </Link>
            <br /><br />
            <Link to="/menleg">
            <div className="legs">
                
                <div className="filter">
                legs
                </div>
                
            </div>
            </Link>
            <br /><br />
            
            
        </div>

    )
}

export default Menc
