import React, { Component } from 'react';
import { Link } from 'react-router';

class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-default" id="navbar">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <a className="navbar-brand" href="#">Geography Game</a>
                  </div>
                  <ul className="nav navbar-nav">
                    <li><Link to="play" activeClassName="active">Play</Link></li>
                    <li><Link to="/" activeClassName="active">Instructions</Link></li>
                    <li><Link to="asia-mode" activeClassName="active">ASIA MODE YAY</Link></li>
                  </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;


