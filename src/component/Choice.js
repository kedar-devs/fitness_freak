import React from 'react'
import { Link } from 'react-router-dom';
function Choice() {
    return (
        <div>
            <div className="row">
                
                <div className="col-md-6 col-lg-6 womenchoice">
                    <Link to="/womenchoice">
                    <div className="subhead">
                    <p>workout for</p><br />
                    <h2>women</h2>
                    </div>
                    </Link>
                </div>
                <div className="col-md-6 col-lg-6 menchoice">
                    <Link to="/menchoice">
                    <div className="subhead-men">
                    <p>workout for</p><br />
                    <h2>men</h2>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Choice
