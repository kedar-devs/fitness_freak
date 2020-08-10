import React from 'react'
import Info from './Info';
import Choice from './Choice.js';
import {Link} from 'react-router-dom';
function Home() {
    return (
        <div>
            <div className="background">
             <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="header">
                        <h1>fitness freak</h1>
                    </div>
                    <p className="sub">for a fit and healthy body</p>
                </div>
            </div>
            </div>
            <Info />
          <Choice />
          <br /><br />
          <Link to='/motivation'>
            <div className="">
                <h5 style={{color: 'green'}}>for motivation</h5>
                <button>click here </button>
            </div>
            </Link>
         </div>
          
    )
}

export default Home
