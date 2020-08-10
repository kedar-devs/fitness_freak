import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/mainpage.css'
import Nav from './component/Navigation.js';

import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle'

import Home from './component/Home';
import Menc from './component/Menc';
import Womenc from './component/Womenc';
import Mench from './component/Mench';
import Mensh from './component/Mensh';
import MenAbs from './component/MenAbs';
import MenLeg from './component/MenLeg';
import WomenArm from './component/WomenArm';
import WomenBely from './component/WomenBely';
import WomenB from './component/WomenB';
import womenth from './component/Womenth';
import Motivation from './component/Motivation';
import Credit from './component/Credit';

import './css/player.css'
function App() {
    return (
        <div className="App container-fluid">
            <Router>
             <Nav />
            <Route path="/" exact component={Home} />
            <Route path="/menchoice" exact component={Menc} />
            <Route path="/womenchoice" exact component={Womenc} />
            <Route path="/menchest" exact component={Mench}/>
            <Route path="/menshoulder" exact component={Mensh} />
            <Route path="/menabs" exact component={MenAbs} />
            <Route path="/menleg" exact component={MenLeg} />
            <Route path="/womenarm" exact component={WomenArm} />
            <Route path="/womenbelly" exact component={WomenBely}/>
            <Route path="/womenb" exact component={WomenB}/>
            <Route path="/womenthigh" exact component={womenth} />
            <Route path="/motivation" exact component={Motivation} />
            
            </Router>
            
            <Credit />
        </div>
    );
}

export default App;
