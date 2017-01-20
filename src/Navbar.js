import React, { Component } from 'react';
import { Link } from 'react-router';
import './css/index.css';

class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-default" id="navbar">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <a className="navbar-brand" href="#">Geography Game</a>
                  </div>
                  <ul className="nav navbar-nav">
                    <li className="tab play-tab"><Link to="play" activeClassName="active">Play</Link></li>
                    <li className="tab instructions-tab"><Link to="/" activeClassName="active">Instructions</Link></li>
                    <li className="tab asia-mode-tab"><Link to="asia-mode" activeClassName="active">ASIA MODE YAY</Link></li>
                  </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;


