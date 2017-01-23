import React, { Component } from 'react';
import { Link } from 'react-router'
import './css/index.css';


class AsiaMode extends Component {
    render(){
        return (
            <div>
              <nav className="navbar navbar-inverse">
                  <div className="navbar-header">
                    <a className="navbar-brand" href="#">
                      <img alt="globe" src="https://www.globalbrigades.org/media/Globe.png"/>
                    </a>
                      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                      </button>
                  </div>
                  <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                      <li className="tab play-tab"><Link to="play" activeClassName="active">Play</Link></li>
                      <li className="tab instructions-tab"><Link to="/" activeClassName="active">Instructions</Link></li>
                      <li className="tab asia-mode-tab"><Link to="asia-mode" activeClassName="active">ASIA MODE YAY</Link></li>
                    </ul>

                      <div className="navbar-header navbar-right">
                      </div>
                  </div>
              </nav>
            <div>
              <h1>Coming Soon</h1>
            </div>
        </div>
        )
    }

}
export default AsiaMode
